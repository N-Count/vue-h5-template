<template>
  <div>
    <div v-show="show" :id="id" :style="{ width: chartWidth, height: chartHeight }"></div>
    <no-data
      v-show="!show"
      className="align-center"
      :style="{ width: chartWidth, height: chartHeight }"
      :noDataUrl="noDataImg"
    />
    <div v-if="showDataSourceFrom" class="data-origin">
      <el-row>
        <el-col class="data-origin-item">
          <span class="el-form-item__label">数据来源:</span>
          <span>{{ dataSourceFrom }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import noData from './noData.vue'
import { mapGetters, mapState } from 'vuex'
import noDataImg from './img/noData.png'
// 雷达图
export default {
  components: {
    'no-data': noData
  },
  props: {
    autoResize: {
      type: Boolean,
      default: true
    },
    radarIndicatorItems: {
      type: Array,
      default: () => []
    },
    radarValues: {
      type: Array,
      default: () => []
    },
    chartHeight: {
      type: String,
      default: '398px'
    },
    id: {
      type: String,
      default: 'radarChart'
    },
    titleText: {
      type: String,
      default: ''
    },
    titleTextSize: {
      type: Number,
      default: 16
    },
    zoomBeginDate: {
      type: String,
      default: ''
    },
    showDataSourceFrom: {
      type: Boolean,
      default: true
    },
    // 是否显示雷达图线上面的数值
    displayAxisLabelNum: {
      type: Boolean,
      default: true
    },
    // 是否设置最大值最小值 不设置就自适应
    isSetMaxAndMin: {
      type: Boolean,
      default: true
    },
    // 雷达图中心
    radarCenter: {
      type: Array,
      default: () => ['50%', '55.8%']
    },
    // 雷达图半径
    radarRadius: {
      type: String,
      default: '60%'
    },
    // 是否展示图例
    displayLegend: {
      type: Boolean,
      default: true
    },
    // 设置图例位置
    legendPosition: {
      type: Object,
      default: () => ({})
    },
    // 设置图例位置
    legendsPosition: {
      type: String,
      default: ''
    },
    // 区域背景透明度
    areaBgOpacity: {
      type: Number,
      default: 0
    },
    // 是否展示 symbol
    showSymbol: {
      type: String,
      default: 'emptyCircle'
    },
    // 图例是否是日期格式
    legendDate: {
      type: Boolean,
      default: true
    },
    // 是否格式小数
    isToFixed: {
      type: Boolean,
      default: true
    },
    lineStyleWidth: {
      type: [Number, String],
      default: null
    }
  },
  watch: {
    radarIndicatorItems: {
      handler(val, oldVal) {
        if (val.length) {
          this.chartData = this.createEarningsTrend()
          this.$nextTick(() => {
            if (val && val.loading) {
              this.loading = true
              this.show = true
              return false
            }
            this.loading = false
            if (val.data && !val.data.length) {
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
        }
      },
      deep: true
    },
    '$store.state.d2admin.theme.activeName'(value) {
      if (!this.radarIndicatorItems.length) return
      const lineNameColorVal = this.constant.lineNameColorLists[value]
      const lineColorVal = this.constant.lineColorLists[value]
      this.xAxisColor = lineNameColorVal
      this.xAxisLineColor = lineColorVal
      this.pageIconColor = this.constant.mainColorLists[value]
      this.tipBgColor = this.constant.lineBarTipBgColorLists[value]
      // this.tipTextColor = this.constant.rgbaColorList[value]
      const rgbaColor = this.constant.rgbaColorList[value]
      this.tipTextColor = this.util.hexToRgba(rgbaColor, 0.9)
      this.tipTitleTextColor = this.util.hexToRgba(rgbaColor, 0.6)
      this.lineColor = this.constant.dataLegendColorList[value]
      this.shadowTooltips = this.constant.tipBgShadow[value]
      this.xyAxisTextColor = this.constant.miniNameColorLists[value]
      this.initChart()
    },
    asideCollapse(val) {
      this.__resizeHanlder = this.util.debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 800)
      this.__resizeHanlder()
    }
  },
  data() {
    return {
      loading: false,
      chart: null,
      chartWidth: '100%',
      show: true,
      chartData: [],
      dataSourceFrom: '',
      bgColor: '',
      xyAxisTextColor: '',
      noDataImg
    }
  },
  computed: {
    ...mapState('d2admin/dirty', ['dirty']),
    ...mapState('d2admin/menu', ['asideCollapse']),
    ...mapGetters('d2admin', {
      themeActiveSetting: 'theme/activeSetting'
    }),
    ...mapState('d2admin/user', ['info']),
    xAxisColorStyle() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.lineNameColorLists[name]
      return colorVal
    },
    // x,y轴字体色
    xyAxisTextColorStyle() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.miniNameColorLists[name]
      return colorVal
    },
    xAxisLineColorStyle() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.lineColorLists[name]
      return colorVal
    },
    pageIconColorStyle() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.mainColorLists[name]
      return colorVal
    },
    tipBgColorStyles() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.lineBarTipBgColorLists[name]
      return colorVal
    },
    tipTextColorStyles() {
      const name = this.themeActiveSetting.name
      const colorVal = this.util.hexToRgba(this.constant.rgbaColorList[name], 0.9)
      return colorVal
    },
    tipTitleTextColorStyles() {
      const name = this.themeActiveSetting.name
      const colorVal = this.util.hexToRgba(this.constant.rgbaColorList[name], 0.6)
      return colorVal
    },
    // 图颜色
    itemStyleColor() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.dataLegendColorList[name]
      return colorVal
    },
    shadowTooltipsStyles() {
      const name = this.themeActiveSetting.name
      const colorVal = this.constant.tipBgShadow[name]
      return colorVal
    }
  },
  created() {
    this.tipBgColor = this.tipBgColorStyles
    this.tipTextColor = this.tipTextColorStyles
    this.tipTitleTextColor = this.tipTitleTextColorStyles
    this.xAxisColor = this.xAxisColorStyle
    this.xAxisLineColor = this.xAxisLineColorStyle
    this.pageIconColor = this.pageIconColorStyle
    this.lineColor = this.itemStyleColor
    this.shadowTooltips = this.shadowTooltipsStyles
    this.xyAxisTextColor = this.xyAxisTextColorStyle
  },
  activated() {
    // fix activated进入 默认重置图表渲染
    this.$nextTick(_ => {
      this.chart && this.chart.resize()
    })
  },
  mounted() {
    if (!this.radarIndicatorItems.length) {
      this.show = false
      return false
    }
    this.chartData = this.radarIndicatorItems.length ? this.createEarningsTrend() : []

    this.$nextTick(() => {
      this.initChart()
      if (this.chartData && this.chartData.loading) {
        this.loading = true
        return false
      }
      this.loading = false
      this.show = true
      if (this.chartData && this.chartData.data && !this.chartData.data.length) {
        this.show = false
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
    createEarningsTrend() {
      this.getDataSourceFrom()
      return {
        data: this.radarIndicatorItems,
        value: this.radarValues,
        loading: false
      }
    },
    getDataSourceFrom() {
      let dataSourceFrom = ''
      this.radarIndicatorItems.length &&
        this.radarIndicatorItems.map((item, index) => {
          if (item.indicatorSource && !dataSourceFrom.includes(item.indicatorSource)) {
            dataSourceFrom += item.indicatorSource + '、'
          }
        })
      this.dataSourceFrom = dataSourceFrom.substr(0, dataSourceFrom.length - 1)
    },
    getTitleProps() {
      return {
        text: this.titleText,
        textStyle: {
          // 文字颜色
          color: this.xAxisColor
        }
        // padding: [20, 20, 100, 20]
      }
    },
    getLegendProps() {
      const legends = []
      this.radarValues.map(item => {
        legends.push(item.date)
      })
      const legendsProps = {
        data: legends,
        type: 'scroll',
        itemWidth: 10,
        itemHeight: 4,
        pageIconInactiveColor: this.xAxisLineColor,
        pageIconColor: this.pageIconColor,
        x: this.legendsPosition ? this.legendsPosition : null,
        right: this.legendPosition.right || '0',
        top: this.legendPosition.top || '30',
        left: this.legendPosition.left || null,
        bottom: this.legendPosition.bottom || null,
        textStyle: {
          color: this.xyAxisTextColor
        },
        show: this.displayLegend
      }
      // 如果设置固定位置（left, center, right），删除其他参数位置[10, 10, 10, 10]
      if (this.legendsPosition) {
        delete legendsProps.right
        delete legendsProps.top
        delete legendsProps.left
        delete legendsProps.bottom
      }
      return legendsProps
    },
    getRadar() {
      const { data = [] } = this.chartData
      const minArr = []
      const maxArr = []
      const mapArr = []
      data.map(item => {
        const indicator = {
          name: item.indicatorName,
          color: this.xAxisColor
        }
        mapArr.push(indicator)
        minArr.push(item.indicatorMinVal)
        maxArr.push(item.indicatorMaxVal)
      })
      mapArr.map((item, index) => {
        if (index === 0) {
          item.axisLabel = {
            showMaxLabel: false, // 不显示最大值，即外圈不显示数字30
            showMinLabel: true, // 显示最小数字，即中心点显示0
            color: this.xAxisColor,
            show: this.displayAxisLabelNum,
            formatter: function (value) {
              return Number(value).toFixed(0)
            }
          }
        }
        if (this.isSetMaxAndMin) {
          item.min = 20
          item.max = 80
        } else {
          item.min = Math.min.apply(null, minArr).toFixed(0)
          item.max = (Math.max.apply(null, maxArr) + 5).toFixed(0)
        }
      })
      const radarObg = {
        splitNumber: 6, // 雷达图圈数设置
        indicator: mapArr,
        center: this.radarCenter,
        radius: this.radarRadius,
        axisLine: {
          lineStyle: {
            color: this.xAxisLineColor
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            opacity: 0
            // 图表背景网格的颜色
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: this.xAxisLineColor
          }
        }
      }

      return radarObg
    },
    getSeries() {
      const dataValue = this.formartValue(this.radarValues)
      const radarObj = {
        name: this.titleText,
        type: 'radar',
        symbol: this.showSymbol,
        data: dataValue
      }
      if (this.lineStyleWidth) {
        radarObj.lineStyle = {
          width: this.lineStyleWidth // 设置雷达线的宽度
        }
      }
      if (this.areaBgOpacity) {
        radarObj.areaStyle = {
          opacity: this.areaBgOpacity // 设置透明
        }
      }
      return radarObj
    },
    formartValue(data = []) {
      return data.map(item => {
        return {
          name: item.date,
          value: item.dateVal
        }
      })
    },
    tooltip() {
      return {
        trigger: 'axis',
        hideDelay: 0,
        backgroundColor: this.tipBgColor,
        borderColor: this.tipBgColor,
        textStyle: {
          color: this.tipTextColor,
          fontSize: 12,
          align: 'left'
        },
        axisPointer: {
          type: 'line',
          lineStyle: {
            type: 'solid'
          }
        }
      }
    },
    setOptions() {
      let option = {
        color: this.lineColor,
        title: this.getTitleProps(),
        legend: this.getLegendProps(),
        radar: this.getRadar(),
        // grid: {
        //   left: '10%',
        //   right: '50%',
        //   containLabel: true
        // },
        tooltip: {
          trigger: 'item',
          hideDelay: 0,
          extraCssText: `box-shadow: 0px 2px 7px 1px ${this.shadowTooltips};`,
          backgroundColor: this.tipBgColor,
          borderColor: this.tipBgColor,
          textStyle: {
            color: this.tipTextColor,
            fontSize: 12,
            align: 'left'
          },
          axisPointer: {
            type: 'radar',
            lineStyle: {
              type: 'solid'
            }
          },
          formatter: params => {
            const { value = [], name } = params
            const { data = [] } = this.chartData
            let valueDom = ''
            value.map((item, index) => {
              let showVal = this.isToFixed ? this.util.thousands(item) : item
              let showUnit =
                data[index].indicatorUnit &&
                showVal &&
                !['-', '--', undefined, NaN, null, ''].includes(showVal)
                  ? data[index].indicatorUnit
                  : ''
              valueDom += `<div style="width: 100%;display: flex;justify-content: space-between;margin-bottom: 8px">
              <span style="padding-right:20px">${data[index].indicatorName}</span>
              <span>${showVal}${showUnit}</span>
              </div>`
            })
            const str = `<div>
              <span style="${name && this.legendDate ? '' : 'color:' + this.tipTitleTextColor}">${
              name && this.legendDate ? dayjs(name).format('YYYY-MM-DD') : name || ''
            }</span>
              <div style="margin-top: 8px;">
                ${valueDom}
              </div>
            </div>`
            return str
          }
        },
        series: this.getSeries()
      }
      this.chart.setOption(option)
      this.chart.resize()
    },
    async initChart() {
      if (!this.id) return
      this.chart = this.$echarts.init(document.getElementById(this.id), null, {
        devicePixelRatio: 2
      })
      if (this.autoResize) {
        this.__resizeHanlder = this.util.debounce(() => {
          if (this.chart) {
            this.chart.resize()
          }
        }, 400)
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
.data-origin {
  padding: 0 20px;
  margin-top: 20px;
  .data-origin-item {
    display: flex;
    align-items: baseline;
    span {

    }
    span:first-child {
      font-size: 12px;
      min-width: 70px;
      text-align: right;
    }
    span:nth-child(2) {
      // vertical-align: middle;
      // float: left;
      font-size: 12px;
      line-height: 17px;
      // padding: 0 12px 0 0;
      // -webkit-box-sizing: border-box;
      // box-sizing: border-box;
    }
  }
}

// @import  '@/styles/base.scss';
</style>
