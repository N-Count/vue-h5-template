<template>
  <div>
    <div v-show="show" :id="id" :style="{ width: chartWidth, height: chartHeight }"></div>
    <no-data
      v-show="!show"
      className="align-center"
      :style="{ width: chartWidth, height: chartHeight }"
      :noDataUrl="chartData && chartData.noDataUrl"
    />
  </div>
</template>
<script>
import noData from '../noData.vue'
import dayjs from 'dayjs'
// 自定义分组走势图
export default {
  components: {
    'no-data': noData
  },
  props: {
    autoResize: {
      type: Boolean,
      default: true
    },
    xAxisRotate: {
      type: Boolean,
      default: true
    },
    jgtChartData: {
      type: Array,
      default: () => []
    },
    chartHeight: {
      type: String,
      default: '400px'
    },
    id: {
      type: String,
      default: 'lineCharts'
    },
    titleText: {
      type: String,
      default: ''
    },
    titleTextSize: {
      type: Number,
      default: 16
    },
    // 是否使用自定义标题
    useCustomTitle: {
      type: Boolean,
      default: false
    },
    // 保留小数位
    fixedNum: {
      type: Number,
      default: 2
    }
  },
  watch: {
    jgtChartData: {
      handler(val) {
        this.chartData = val || []
        this.$nextTick(() => {
          if (!val || !val.length) {
            this.show = false
            return false
          }
          this.show = true
          if (this.chart) {
            this.setOptions()
          } else {
            this.initChart()
          }
        })
      },
      deep: true
    },
    '$store.state.d2admin.theme.activeName'(value) {
      if (!this.chartData.length) return
      this.xAxisColor = this.constant.lineNameColorLists[value]
      this.xAxisLineColor = this.constant.lineColorLists[value]
      this.lineColor = this.constant.dataLegendColorList[value]
      this.initChart()
    }
  },
  data() {
    return {
      chart: null,
      chartWidth: '100%',
      show: true,
      lineColor: [],
      xAxisColor: '',
      xyAxisTextColor: '',
      xAxisLineColor: '',
      themeName: '',
      containerWidth: '',
      chartData: [],
      themeActiveSetting: { title: '浅色主题', name: 'lightTheme', preview: 'image/theme/lightTheme/small-logo2.png' }
    }
  },
  computed: {
    xAxisColorStyle() {
      const colorVal = this.constant.lineNameColorLists[this.themeName]
      return colorVal
    },
    // x,y轴字体色
    xyAxisTextColorStyle() {
      const colorVal = this.constant.miniNameColorLists[this.themeName]
      return colorVal
    },
    xAxisLineColorStyle() {
      const colorVal = this.constant.lineColorLists[this.themeName]
      return colorVal
    },
    tipBgColorStyles() {
      const colorVal = this.constant.lineBarTipBgColorLists[this.themeName]
      return colorVal
    },
    tipTextColorStyles() {
      const colorVal = this.constant.lineBarTipTextColorLists[this.themeName]
      return colorVal
    },
    lineColorStyles() {
      const colorVal = this.constant.dataLegendColorList[this.themeName]
      return colorVal
    },
    shadowTooltipsStyles() {
      const colorVal = this.constant.tipBgShadow[this.themeName]
      return colorVal
    },
    barHoverColorStyles() {
      const colorVal = this.constant.barHoverColor[this.themeName]
      return colorVal
    },
    barClickColorStyles() {
      const barClickColor = this.constant.barClickColor[this.themeName]
      return barClickColor
    }
  },
  created() {
    this.themeName = this.themeActiveSetting.name
    this.tipBgColor = this.tipBgColorStyles
    this.tipTextColor = this.tipTextColorStyles
    this.xAxisColor = this.xAxisColorStyle
    this.xyAxisTextColor = this.xyAxisTextColorStyle
    this.xAxisLineColor = this.xAxisLineColorStyle
    this.lineColor = this.lineColorStyles
    this.shadowTooltips = this.shadowTooltipsStyles
    this.barHoverColor = this.barHoverColorStyles
    this.barClickColor = this.barClickColorStyles
  },
  mounted() {
    this.$nextTick(() => {
      this.chartData = this.jgtChartData || null
      if (!this.chartData) {
        this.show = false
      } else {
        this.containerWidth = document.getElementById(this.id)?.clientWidth
        this.initChart()
      }
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    dateComparison(a, b) {
      const date1 = new Date(a)
      const date2 = new Date(b)
      return date1 - date2
    },
    getXAxisData() {
      let xAxisData = []
      if (this.chartData.length) {
        this.chartData.map(item => {
          if (item.items?.length) {
            item.items.map(label => {
              if (label.date) xAxisData.push(dayjs(label.date).format('YYYY-MM'))
            })
          }
        })
      }
      xAxisData = [...new Set(xAxisData)]
      xAxisData = xAxisData.sort(this.dateComparison)
      return xAxisData
    },
    getYAsisRange() {
      const indicatoMinVal = []
      const indicatorMaxVal = []
      this.chartData.map(item => {
        indicatoMinVal.push(Number(item.indicatoMinVal))
        indicatorMaxVal.push(Number(item.indicatorMaxVal))
      })
      const minVal = (Math.min.apply(null, indicatoMinVal) - 1).toFixed(2).toString()
      const maxVal = (Math.max.apply(null, indicatorMaxVal) + 1).toFixed(2).toString()
      return { minVal, maxVal }
    },
    generateGrids() {
      const xAxisData = this.getXAxisData()
      const { minVal, maxVal } = this.getYAsisRange()
      let xAxis = []
      let yAxis = []
      let series = []
      let grid = []
      const GRID_COUNT = this.chartData.length
      const width = this.containerWidth
      const yAxisLabelWidth = 30 // y轴标签宽度
      const girdRight = 5 // 右侧留白
      const gridWidth = (width - yAxisLabelWidth - girdRight) / GRID_COUNT // 单个grid宽度
      const gridFirstWidth = gridWidth + yAxisLabelWidth // 第一个grid宽度
      for (let i = 0; i < GRID_COUNT; i++) {
        grid.push({
          top: 70,
          bottom: 0,
          left: i === 0 ? 0 : i === 1 ? gridFirstWidth : gridWidth * (i - 1) + gridFirstWidth,
          right: i === GRID_COUNT - 1 ? girdRight : 0,
          width: i === 0 ? gridFirstWidth : gridWidth,
          containLabel: true
        })
        yAxis.push({
          gridIndex: i,
          type: 'value',
          name: i === 0 && this.chartData[i].indicatorUnit ? ` 单位:（${this.chartData[i].indicatorUnit}）` : '',
          max: maxVal,
          min: minVal,
          axisLine: {
            show: i === 0
          },
          axisTick: {
            show: i === 0
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: i === 0
          }
        })
        xAxis.push({
          gridIndex: i,
          type: 'category',
          data: xAxisData,
          boundaryGap: true,
          axisLabel: {
            rotate: this.xAxisRotate ? 70 : null,
            verticalAlign: 'top',
            // interval: 0,
            formatter: value => {
              return value !== 'null' && value !== '' && value !== 'undefined' ? value : ''
            }
          }
        })
        let valueList = []
        xAxisData.forEach(date => {
          let data = this.chartData[i].items.filter(m => dayjs(m.date).format('YYYY-MM') === date)[0]
          valueList.push(data.value === null ? '' : data.value)
        })
        // let hasValue = valueList.filter(data => data !== '')
        // let symbolRotate =
        //   hasValue[hasValue.length - 1] - +hasValue[hasValue.length - 2] > 0.1
        //     ? 0
        //     : +hasValue[hasValue.length - 2] - +hasValue[hasValue.length - 1] > 0.1
        //     ? -90
        //     : -90
        series.push({
          type: 'line',
          showSymbol: true,
          xAxisIndex: i,
          yAxisIndex: i,
          data: valueList,
          markArea: {
            itemStyle: {
              color: 'rgba(133, 134, 156, 0.1)'
            },
            label: {
              position: 'insideTop',
              color: this.xAxisColor,
              fontWeight: 'bold',
              padding: 8
            },
            data: [
              [
                {
                  name: this.chartData[i].indicatorDisplayName,
                  xAxis: xAxisData[0]
                },
                {
                  xAxis: xAxisData[xAxisData.length - 1]
                }
              ]
            ],
            emphasis: {
              disabled: true
            }
          },
          symbol: function (data, params) {
            return 'none'
          },
          symbolSize: 10,
          // symbolRotate: symbolRotate,
          smooth: true
        })
      }
      return { grid, series, xAxis, yAxis }
    },
    getLegendColor() {
      const legendColor = []
      this.chartData.map((item, index) => {
        let cols = this.lineColor[index]
        legendColor.push(cols)
      })
      return legendColor
    },
    tooltip() {
      return {
        trigger: 'axis',
        extraCssText: `box-shadow: 0px 2px 7px 1px ${this.shadowTooltips};`,
        hideDelay: 10,
        padding: [4, 12, 12, 12], // 提示框浮层内边距，
        position: function (point, params, dom, rect, size) {
          // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
          // 提示框位置
          var x = 0 // x坐标位置
          var y = 0 // y坐标位置

          // 当前鼠标位置
          var pointX = point[0]
          var pointY = point[1]

          // 外层div大小
          // var viewWidth = size.viewSize[0];
          // var viewHeight = size.viewSize[1];

          // 提示框大小
          var boxWidth = size.contentSize[0]
          var boxHeight = size.contentSize[1]

          // boxWidth > pointX 说明鼠标左边放不下提示框
          if (boxWidth > pointX) {
            x = 5
          } else {
            // 左边放的下
            x = pointX - boxWidth
          }

          // boxHeight > pointY 说明鼠标上边放不下提示框
          if (boxHeight > pointY) {
            y = 5
          } else {
            // 上边放得下
            y = pointY - boxHeight
          }

          return [x, y]
        },
        backgroundColor: this.tipBgColor,
        borderColor: this.tipBgColor,
        textStyle: {
          color: this.tipTextColor,
          fontSize: 12,
          align: 'left'
        },
        axisPointer: {
          type: 'line',
          shadowStyle: {
            width: 'auto',
            color: this.barHoverColor,
            opacity: 0.4
          },
          lineStyle: {
            type: 'dashed',
            color: this.labelLineColor
          }
        },
        confine: true,
        formatter: param => {
          return this.tooltipFormatter(param)
        }
      }
    },
    tooltipFormatter(param = []) {
      let str = ''
      let headerFlag = false
      param.forEach((item, index) => {
        const { name, value, componentIndex } = item
        // 处理名字追加问题
        let dataItem = this.chartData[componentIndex]

        let newVal = value
        if (!newVal && newVal !== 0) return
        let html = `
        <span style="background-color: ${this.lineColor[componentIndex]};display:inline-block;height: 1px;width:8px;margin-right: 4px;margin-top: -2px;vertical-align: middle;"></span>`

        const labelNameStr = `
            <span style="float: left"> ${html} ${dataItem.indicatorDisplayName} </span>
                <span style="float: right;margin-left: 20px;"> ${this.util.thousands(newVal, this.fixedNum)}${
          dataItem.indicatorUnit
        }</span>
        <br>`

        let headerDom = `<span style="margin: 8px 0; display: block" class="jgy-chart-tooltip-title" >
        ${name}
        </span>`
        str += `<div >
          <div style="font-size: 12px; color: red">
                  </div>
                   ${headerFlag ? '' : headerDom}
                  <div  class="jgy-chart-tooltip-content">
                  ${newVal || newVal === 0 ? labelNameStr : ''}

                  </div>
                </div>`
      })
      return str
    },
    getTitleProps() {
      return {
        show: !this.useCustomTitle,
        text: this.titleText,
        textStyle: {
          // 文字颜色
          fontSize: this.titleTextSize,
          color: this.xAxisColor
        }
        // padding: [20, 20, 100, 20]
      }
    },
    setOptions() {
      const { grid, series, xAxis, yAxis } = this.generateGrids()
      let option = {
        title: this.getTitleProps(),
        color: this.getLegendColor(),
        tooltip: this.tooltip(),
        xAxis: xAxis,
        yAxis: yAxis,
        grid: grid,
        series: series
      }
      this.chart.setOption(option, { notMerge: true })
      this.chart.resize()
    },
    async initChart() {
      this.chart = this.$echarts.init(document.getElementById(this.id))
      if (this.autoResize) {
        this.__resizeHanlder = this.util.debounce(() => {
          if (this.chart) {
            this.containerWidth = document.getElementById(this.id)?.clientWidth
            this.setOptions()
            this.chart.resize()
          }
        }, 100)
        window.addEventListener('resize', this.__resizeHanlder)
      }
      this.setOptions()
    },
    // 销毁chart实例
    disposeChart() {
      if (this.chart) {
        this.chart.dispose()
        this.chart = null
        this.show = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
// @import  '@/styles/base.scss';
</style>
