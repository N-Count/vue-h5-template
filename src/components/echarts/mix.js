import dayjs from 'dayjs'
import Vue from 'vue'
import noDataImg from './img/noData.png'
import { mapGetters, mapState } from 'vuex'
import markPointImg from './img/markPoint.svg'
import markPointGreenImg from './img/markPointGreen.png'
import markPointRedImg from './img/markPointRed.png'
import jgyIconImg from '@/libs/base64Img'
import { cloneDeep } from 'lodash'

Vue.prototype.$globalchar = null
export default {
  data() {
    return {
      // chart: null,
      chartWidth: '100%',
      loading: false,
      show: true,
      chartData: [],
      dataSourceFrom: '',
      xAxisColor: '',
      xyAxisTextColor: '',
      xAxisLineColor: '',
      dataZoomBorderColor: '',
      dataZoomBackAreaColor: '',
      fillerColor: '',
      themeName: '',
      noDataImg,
      hasUnit: false,
      // 拖动标识，只要拖动重新渲染就以拖动后位置为准
      isDraged: false,
      dragDate: {},
      markPointIdx: [], // 特殊标识
      markPointDataList: [],
      markLineSymbol: {},
      customIndex: 0, // 记录自定义追加标题
      hoverFlag: false,
      themeActiveSetting: { title: '浅色主题', name: 'lightTheme', preview: 'image/theme/lightTheme/small-logo2.png' }
    }
  },
  activated() {
    // 解决打开多个tag，窗口缩放之后，切换tag 引起的图表变形问题
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.$globalchar) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }
    this.$globalchar && this.$globalchar.clear()
    this.$globalchar && this.$globalchar.dispose()
    this.$globalchar = null
  },
  watch: {
    showLabelNum: {
      handler() {
        this.$globalchar && this.setOptions()
      },
      setImmediate: true
    },
    selectBarIndex: {
      handler() {
        this.$globalchar && this.setOptions()
      },
      setImmediate: true
    },
    jgtChartData: {
      handler(val) {
        if (val.length) {
          this.chartData = this.createEarningsTrend()
          this.isDraged = false
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
            if (this.$globalchar) {
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
      if (!this.jgtChartData.length) return
      const lineNameColorVal = this.constant.lineNameColorLists[value]
      const lineColorVal = this.constant.lineColorLists[value]
      const dataZoomBorderColor = this.constant.dataZoomBorderColorLists[value]
      this.xAxisColor = lineNameColorVal
      this.xyAxisTextColor = this.constant.miniNameColorLists[value]
      this.xAxisLineColor = lineColorVal
      this.dataZoomBorderColor = dataZoomBorderColor
      this.dataZoomBackAreaColor = dataZoomBorderColor
      this.dataZoomBSelectedBackground = dataZoomBorderColor
      this.dataZoomTextColor = dataZoomBorderColor
      this.handleIcon = this.constant.dataZoomIconList[value]
      this.pageIconColor = this.constant.mainColorLists[value]
      this.tipBgColor = this.constant.lineBarTipBgColorLists[value]
      this.tipTextColor = this.constant.lineBarTipTextColorLists[value]
      this.lineBarColor = this.constant.dataLegendColorList[value]
      this.barColor = this.constant.dataLegendColorList[value]
      this.lineColor = this.constant.dataLegendColorList[value]
      this.shadowTooltips = this.constant.tipBgShadow[value]
      this.barHoverColor = this.constant.barHoverColor[value]
      this.barClickColor = this.constant.barClickColor[value]
      this.casketListColor = this.constant.gridColor[value]
      this.initChart()
    }
  },
  computed: {
    ...mapState('d2admin/user', ['info']),
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
    dataZoomBorderStyle() {
      const colorVal = this.constant.dataZoomBorderColorLists[this.themeName]
      return colorVal
    },
    handleIconUrl() {
      const urls = this.constant.dataZoomIconList[this.themeName]
      return urls
    },
    pageIconColorStyle() {
      const colorVal = this.constant.mainColorLists[this.themeName]
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
    barColorStyles() {
      const colorVal = this.constant.dataLegendColorList[this.themeName]
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
    },
    casketList() {
      const name = this.themeActiveSetting.name
      return this.constant.gridColor[name]
    },
    //  Rgba
    LineColorRgba() {
      // const name = this.themeActiveSetting.name
      // const mainColorRgbaLists = {}
      // mainColorRgbaLists.darkTheme = '#FF6A4D'
      //   ? this.util.hexToRgba('#FF6A4D', 0.1)
      //   : this.util.hexToRgba(this.constant.mainColorLists[name], 0.1)
      // mainColorRgbaLists.lightTheme = '#D60010'
      //   ? this.util.hexToRgba('#D60010', 0.1)
      //   : this.util.hexToRgba(this.constant.mainColorLists[name], 0.1)
      // const colorVal = mainColorRgbaLists[name]
      // return colorVal
      return ''
    }
  },
  created() {
    this.themeName = this.themeActiveSetting.name
    this.tipBgColor = this.tipBgColorStyles
    this.tipTextColor = this.tipTextColorStyles
    this.xAxisColor = this.xAxisColorStyle
    this.xyAxisTextColor = this.xyAxisTextColorStyle
    this.xAxisLineColor = this.xAxisLineColorStyle
    this.dataZoomBorderColor = this.dataZoomBorderStyle
    this.dataZoomBackAreaColor = this.dataZoomBorderStyle
    this.dataZoomBSelectedBackground = this.dataZoomBorderStyle
    this.fillerColor = '#A08D7930'
    this.handleIcon = this.handleIconUrl
    this.dataZoomTextColor = this.dataZoomBorderStyle
    this.pageIconColor = this.pageIconColorStyle
    this.barColor = this.barColorStyles
    this.lineColor = this.lineColorStyles
    this.colorRgba = this.LineColorRgba
    this.shadowTooltips = this.shadowTooltipsStyles
    this.barHoverColor = this.barHoverColorStyles
    this.barClickColor = this.barClickColorStyles
    this.markLineSymbol = this.constant.markLineSymbol
    this.casketListColor = this.casketList
  },
  mounted() {
    if (!this.jgtChartData.length) {
      this.show = false
      return false
    }
    this.chartData = this.jgtChartData.length ? this.createEarningsTrend() : []
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
  methods: {
    zoomEndCb() {
      this.$emit('dragZoomEndCb', this.dragDate)
    },
    dateComparison(a, b) {
      const date1 = new Date(a)
      const date2 = new Date(b)
      return date1 - date2
    },
    createEarningsTrend() {
      let xAxisData = []
      const unitObj = {}
      let newJgtChartData = []
      this.jgtChartData.length &&
        this.jgtChartData.map(item => {
          if (item.indicatorUnit) {
            this.hasUnit = true
          }
          let tipsName = item?.isShortName === '1' ? item?.indicatorDisplayName : item?.indicatorName
          const units = item.indicatorUnit ? item.indicatorUnit : ''
          unitObj[tipsName] = units
        })
      if (this.jgtChartData.length) {
        this.jgtChartData.map((item, index) => {
          if (item.items?.length && !this.isTextxAxis) {
            item.items.map(label => {
              if (label.date === null) return
              xAxisData.push(label.date ? dayjs(label.date).format(`${this.dateFormate}`) : label.date)
            })
          }
          if (this.isTextxAxis) {
            item.items.map(label => {
              xAxisData.push(label.date)
            })
          }
        })
      }
      xAxisData = [...new Set(xAxisData)]
      xAxisData = xAxisData.sort(this.dateComparison)
      this.getDataSourceFrom()
      if (this.isLegendName) {
        newJgtChartData = this.addCustomTitle()
      }
      return {
        xAxisData,
        data: this.isLegendName ? newJgtChartData : this.jgtChartData,
        axisLabelRotate: 0,
        unit: unitObj,
        loading: false
      }
    },
    addCustomTitle() {
      let jgtChartData = cloneDeep(this.jgtChartData || [])
      jgtChartData.map((item, index) => {
        let elementName = item.elementName || ''
        let indicatorName = item.indicatorName || ''
        if (elementName?.includes(this.isLegendName) || indicatorName?.includes(this.isLegendName)) {
          if (elementName) {
            item.elementName = elementName.replace(this.isLegendName, '')
          }
          if (indicatorName) {
            item.indicatorName = indicatorName.replace(this.isLegendName, '')
          }
          this.customIndex = index
        }
        return item
      })
      return jgtChartData
    },
    getDataSourceFrom() {
      let dataSourceFrom = ''
      this.jgtChartData.length &&
        this.jgtChartData.map((item, index) => {
          if (item.indicatorSource && !dataSourceFrom.includes(item.indicatorSource))
            dataSourceFrom += item.indicatorSource + '、'
        })
      this.dataSourceFrom = dataSourceFrom.substr(0, dataSourceFrom.length - 1)
    },
    async initChart() {
      const chartDom = document.getElementById(this.id)
      if (!chartDom) return
      this.$globalchar = this.$echarts.init(chartDom, null, {
        renderer: this.renderType,
        devicePixelRatio: this.devicePixelRatio
      })
      if (this.autoResize) {
        this.__resizeHanlder = this.util.debounce(() => {
          if (this.$globalchar) {
            this.$globalchar.resize()
          }
        }, 800)
        window.addEventListener('resize', this.__resizeHanlder)
      }
      const that = this
      let isDragging = false
      this.$globalchar &&
        this.$globalchar.on('dataZoom', function (params) {
          const { start, end } = params
          let xAxis = that.$globalchar.getModel().option.xAxis[0] // 获取axis
          const { data = [] } = xAxis
          let endValue = that.$globalchar.getOption().dataZoom[0].endValue
          let startValue = that.$globalchar.getOption().dataZoom[0].startValue
          that.isDraged = true
          isDragging = true
          that.dragStart = start
          that.dragEnd = end
          const obj = {
            start: data[startValue],
            end: data[endValue]
          }
          that.dragDate = obj
          const cb = that.util.decounce(() => {
            if (!isDragging) return
            isDragging = false
            that.zoomEndCb()
          }, 1500)
          that.useDragRequest && cb()
        })
      this.$globalchar.getZr().on('click', params => {
        const pointInPixel = [params.offsetX, params.offsetY]
        if (this.$globalchar.containPixel('grid', pointInPixel)) {
          let xIndex = this.$globalchar.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY]) // [点击的数字，数据索引]
          // const op = this.$globalchar.getOption()
          this.$emit('selectBarClickCb', xIndex)
          // 进行其他操作
        }
        // 债基异常监控跳转基金公司事件 & 其他点击事件执行
        // let currentIdx = this.$globalchar.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
        // this.$emit('clickCurrentChartIndex', currentIdx)
      })
      // 债基异常监控跳转基金公司事件 & 其他点击事件执行
      //  是否放开label点击事件
      if (this.labelTriggerEven) {
        this.$globalchar.on('click', params => {
          if (params.componentType === 'yAxis') {
            const { dataIndex = 0 } = params
            if (dataIndex || dataIndex === 0) {
              this.$emit('clickCurrentChartIndex', dataIndex, params)
            }
          }
        })
        //  label颜色高亮，由于影响范围大所以注释，后续有可能会打开
        // this.$globalchar.on('mouseover', params => {
        //   if (params.componentType === 'yAxis') {
        //     const { dataIndex = 0, value = '' } = params
        //     const options = this.$globalchar.getOption()
        //     const yAxisItem = {
        //       value: value,
        //       textStyle: {
        //         color: '#00ff7f'
        //       }
        //     }
        //     options.yAxis[0].data.splice(dataIndex, 1, yAxisItem)
        //     this.$globalchar.setOption(options)
        //   }
        // })
        // this.$globalchar.on('mouseout', params => {
        //   if (params.componentType === 'yAxis') {
        //     const { dataIndex = 0, value } = params
        //     const options = this.$globalchar.getOption()
        //     if (options.yAxis[0]) {
        //       options.yAxis[0].data.splice(dataIndex, 1, value)
        //       this.$globalchar.setOption(options)
        //     }
        //   }
        // })
      }

      // this.showLoading()
      this.legendselectchangedAction()
      this.setOptions()
      // 自定义调整额外参数
      if (this.customSetParams !== '') {
        const option = JSON.parse(this.customSetParams)
        this.customSetChartsParams(option)
      }
      // this.hideLoading()
    },
    customSetChartsParams(option) {
      this.$globalchar.setOption(option)
    },
    // 判断日期是否NaN, 重置最大最小值
    legendselectchangedAction() {
      let self = this
      // 图例点击
      try {
        this.$globalchar.on('legendselectchanged', function (params) {
          // 判断所有图例是否置灰
          let selectedLegend = params.selected
          let count = 0
          for (let seriesName in selectedLegend) {
            if (selectedLegend.hasOwnProperty.call(seriesName) && selectedLegend[seriesName]) {
              count++
            }
          }
          // 判断dataZoom 开始及结束日期为NaN
          const endNaN = self.$globalchar && isNaN(self.$globalchar.getOption().dataZoom[0]?.end)
          const endValueNaN = self.$globalchar && isNaN(self.$globalchar.getOption().dataZoom[0]?.endValue)
          const startNaN = self.$globalchar && isNaN(self.$globalchar.getOption().dataZoom[0]?.start)
          const startValue = self.$globalchar && isNaN(self.$globalchar.getOption().dataZoom[0]?.startValue)
          // 如果dataZoom 都是NaN， 一个图例也没有时，初始化x轴 最大最小值为 null
          if (endNaN && endValueNaN && startNaN && startValue && Number(count) === 0) {
            self.$globalchar.setOption({
              xAxis: {
                max: this.useYAxis ? this.customPercentage : null,
                min: this.useYAxis ? 0 : null // 取0为最小刻度
              }
            })
          }
          self.$emit('legendselectchanged', params)
        })
      } catch (error) {
        console.log(error)
      }
    },
    returnFalse() {
      if (!this.chartData || (this.chartData && this.chartData.data && !this.chartData.data.length)) {
        // this.hideLoading()
        return false
      }
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
    grid() {
      return {
        left: this.gridPadding.length ? this.gridPadding[3] : 60,
        right: this.gridPadding.length ? this.gridPadding[1] : 60,
        // bottom: this.chartData.axisLabelRotate ? 150 : 86,
        bottom: this.gridPadding.length ? this.gridPadding[2] : 65,
        top: this.gridPadding.length ? this.gridPadding[0] : this.hasUnit ? 85 : 55,
        containLabel: this.containLabel
      }
    },
    getLegendProps() {
      const { data = [] } = this.chartData
      const legends = []
      let legendsProps = {}
      // const legendTop = this.chartHeight.substring(0, this.chartHeight.indexOf('px'))
      data.map(item => {
        if (this.isTextxAxis && item.length === 1) {
          item.items.map(label => {
            legends.push({
              name: label.date
            })
          })
        } else {
          // isShortName 用于修改图例名称 换indicatorDisplayName字段展示
          legends.push({
            name: item?.isShortName === '1' ? item.indicatorDisplayName : item.indicatorName || item.signalName,
            icon:
              item.chartType === '2'
                ? 'rect'
                : item.chartType === '5'
                ? 'emptydiamond'
                : item.rayType === '2'
                ? 'path://M6 5L8 5L8 6L6 6ZM9 5L11 5L11 6L9 6ZM12 5L14 5L14 6L12 6Z'
                : 'path://M6 4L30 4L30 8L6 8'
          })
        }
      })

      legendsProps = {
        show: !this.useCustomLegend,
        type: 'scroll',
        width: this.legendWidth,
        x: this.legendsPosition ? this.legendsPosition : null,
        pageIconInactiveColor: this.xAxisLineColor,
        pageIconColor: this.pageIconColor,
        pageTextStyle: {
          color: this.xAxisColor
        },
        data: legends,
        selectedMode: this.legendSelectedMode, // 设置为多选模式
        selected: this.legendSelected, // 默认选中的
        right: this.legendsRight,
        top: this.legendsTop,
        textStyle: {
          color: this.xAxisColor,
          lineHeight: 55,
          rich: {
            a: {
              verticalAlign: 'top'
            }
          },
          padding: [0, 0, -2, 0] // [上、右、下、左]
        },
        itemWidth: 8,
        itemHeight: 8
      }
      return legendsProps
    },
    getLegendColor() {
      const { data = [] } = this.chartData
      let colorsClone = cloneDeep(this.barColor)
      if (this.useLegendFillColor) {
        let forCount = Math.ceil(data.length / colorsClone.length)
        if (forCount > 1) {
          colorsClone = colorsClone.map(item => this.util.hexToRgba(item, this.useLegendFillColorOpacity))
          for (let i = 1; i < forCount; i++) {
            colorsClone = [...colorsClone, ...colorsClone]
          }
        }
      }
      const legendColor = []
      data.map((item, index) => {
        const type = this.util.getChartType[item.chartType]
        let cols = ''
        if (type === 'line') {
          cols = this.useAssignedLineColor ? this.assignedLineColor[index] : this.lineColor[index]
        } else {
          if (this.useComparisonColor) {
            cols =
              this.casketListColor.find(list => Object.keys(list).includes(String(item.items[0].value)))?.[
                String(item.items[0].value)
              ] || null
          } else {
            cols = this.useAssignedBarColor ? this.assignedBarColor[index] : colorsClone[index]
          }
        }
        legendColor.push(cols)
      })
      return legendColor
    },
    barXais() {
      return {
        type: 'category',
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax',
        axisTick: {
          show: false
        },
        axisLabel: {
          rotate: this.chartData.axisLabelRotate || 0,
          margin: 10,
          color: this.xyAxisTextColor,
          formatter: (value, index) => {
            return this.xAxisAxisLabel(value, index)
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: this.xAxisLineColor
          }
        },
        data: this.chartData.data.map(item => item.name) || []
      }
    },
    xAxis() {
      return {
        show: this.xAxisShow,
        type: this.useYAxis ? 'value' : 'category',
        splitNumber: this.xAxisSplitNum ? this.xAxisSplitNum : 5,
        // min: 'dataMin',
        max: this.useYAxis ? this.customPercentage : 'dataMax',
        min: this.useYAxis ? 0 : 'dataMin', // 取0为最小刻度
        boundaryGap: this.useBoundaryGap,
        axisTick: {
          show: false
        },
        splitLine: {
          show: this.xSplitLineShow,
          // interval: parseInt(this.chartData.data.length / 14),
          lineStyle: {
            type: 'solid',
            color: this.xAxisLineColor
          }
        },
        axisLabel: {
          // interval: 'auto', // 横轴信息全部显示
          interval: this.isTextxAxis ? this.xAxisInterval : 'auto', // 横轴信息全部显示
          margin: 10,
          rotate: this.rotate || (this.xAxisRotate ? 70 : null),
          color: this.xyAxisTextColor,
          formatter: (value, index) => {
            if (this.specialDateList && this.specialDateList.includes(value)) {
              return ' {a|' + '}' + ' {b|' + value + '}'
            }
            return this.useYAxis ? `${value}${this.chartData.data[0].indicatorUnit || ''}` : `${value}`
          },
          rich: {
            a: {
              width: 32,
              height: 16,
              backgroundColor: {
                image: jgyIconImg.forecastIcon
              }
            },
            b: {
              fontWeight: 'bolder',
              // padding: [-2, 0, 0, 0],
              color: this.tipTextColor
            }
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: this.xAxisLineColor
          }
        },
        data: this.useYAxis ? null : this.chartData.xAxisData || []
      }
    },
    yAxis() {
      const { data = [] } = this.chartData
      let leftyAxis = ''
      let rightyAxis = ''
      const that = this
      const baseOptions = {
        type: this.useYAxis ? 'category' : 'value',
        max: this.useYAxisCustom,
        boundaryGap: this.useBoundaryGap,
        show: this.yAxisShow, // y轴是否显示
        splitLine: {
          show: this.yAxissplitLineShow,
          lineStyle: {
            type: this.yAxisSplitLineType, // y轴分割线类型
            color: this.xAxisLineColor
          }
        },
        axisTick: {
          show: this.yAxisAxisTickShow
        },
        axisLine: {
          show: this.yAxisLineShow, // y轴刻度线控制
          lineStyle: {
            color: this.xAxisLineColor
          }
        },
        minInterval: this.yAxisMinInterval, // 设置成1保证坐标轴分割刻度显示成整数。
        data: this.useYAxis ? this.chartData.xAxisData || [] : null
      }
      const leftMinArr = []
      const rigthMinArr = []
      data.map(item => {
        if (item.chartAsis === '2') {
          if (item.indicatorName === '融资融券交易金额') {
            rigthMinArr.push(0)
          } else {
            rigthMinArr.push(Number(item.indicatoMinVal))
          }

          rightyAxis = {
            scale: this.yAxisScaleRight,
            name: this.useYAxisUnit ? (item.indicatorUnit ? `单位:(${item.indicatorUnit})` : '') : null,
            axisLabel: {
              show: this.showYAxisLabel,
              interval: this.isTextxAxis && this.useYAxis ? 'auto' : null, // 横轴信息全部显示
              color: this.xyAxisTextColor,
              // formatter:
              //   this.useYAxis || this.useYAxisUnit
              //     ? `{value}`
              //     : `{value}${item.indicatorUnit ? item.indicatorUnit : ''}`
              formatter: (value, index) => {
                let num = that.fixScaleNumber ? value.toFixed(that.fixScaleNumber) : value
                num = this.useYAxis || this.useYAxisUnit ? num : `${num}${item.indicatorUnit ? item.indicatorUnit : ''}`
                return num
              }
            },
            nameTextStyle: {
              color: this.xyAxisTextColor
            }
          }
          rightyAxis = { ...rightyAxis, ...baseOptions }
        }
        if (item.chartAsis === '1') {
          leftMinArr.push(Number(item.indicatoMinVal))
          leftyAxis = {
            scale: this.yAxisScaleLeft,
            triggerEvent: this.labelTriggerEven,
            name: this.useYAxisUnit ? (item.indicatorUnit ? `单位:（${item.indicatorUnit}）` : '') : null,
            axisLabel: {
              show: this.showYAxisLabel,
              interval: this.isTextxAxis && this.useYAxis ? 'auto' : null, // 横轴信息全部显示
              color: this.xyAxisTextColor,
              showMinLabel: true,
              formatter: (value, index) => {
                if (this.specialDateList && this.specialDateList.includes(value)) {
                  return ' {a|' + '}' + ' {b|' + value + '}'
                }
                let num = that.fixScaleNumber ? value.toFixed(that.fixScaleNumber) : value
                num = this.useYAxis || this.useYAxisUnit ? num : `${num}${item.indicatorUnit ? item.indicatorUnit : ''}`
                return num
              },
              rich: {
                a: {
                  width: 32,
                  height: 16,
                  backgroundColor: {
                    image: jgyIconImg.forecastIcon
                  }
                },
                b: {
                  fontWeight: 'bolder',
                  color: this.tipTextColor
                }
              }
            },
            nameTextStyle: {
              align: 'left',
              color: this.constant.miniNameColorLists[this.themeName]
            }
          }
          leftyAxis = { ...leftyAxis, ...baseOptions }
        }
      })
      const leftMinNum = Math.min.apply(null, leftMinArr).toString()
      const rightMinNum = Math.min.apply(null, rigthMinArr).toString()
      if (!this.useUndulation) {
        if (leftMinArr.length) {
          leftyAxis.min =
            this.fixMinNumber === 0
              ? Math.floor(leftMinNum)
              : leftMinNum.substr(0, leftMinNum.indexOf('.') + 1 + this.fixMinNumber)
        }
        if (rigthMinArr.length) {
          rightyAxis.min =
            this.fixMinNumber === 0
              ? Math.floor(rightMinNum)
              : rightMinNum.substr(0, rightMinNum.indexOf('.') + 1 + this.fixMinNumber)
        }
      }
      let yAxisArr = [...[leftyAxis], ...[rightyAxis]]
      yAxisArr = yAxisArr.filter(item => item)
      if (yAxisArr.length <= 0) {
        yAxisArr = [{}]
      }
      return yAxisArr
    },
    tooltip() {
      return {
        trigger: 'axis',
        extraCssText: `box-shadow: 0px 2px 7px 1px ${this.shadowTooltips};`,
        hideDelay: 10,
        padding: [4, 12, 12, 12], // 提示框浮层内边距，
        // appendToBody: this.tooltipsToBody,
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
          type: this.axisPointerType,
          shadowStyle: {
            width: 'auto',
            color: this.barHoverColor,
            opacity: 0.4
          },
          lineStyle: {
            type: 'dashed',
            color: this.labelLineColor
            // width: this.barWidth + 12,
            // shadowColor:  this.barHoverColor,
            // opacity: 0.4,
          },
          label: {
            show: this.axisPointerType === 'cross',
            backgroundColor: '#838383',
            color: '#fff'
          }
        },
        confine: true,
        formatter: param => {
          //  侧状图 && 非堆叠图, 自定义设置seriesName 逻辑
          if (this.useYAxis && this.barTypeStyle !== 'total' && param.length) {
            param = param.map(item => {
              item.seriesName = item?.name
              return {
                ...item
              }
            })
          }
          if (param && param.length) {
            if (this.customTooltipFun && typeof this.customTooltipFun === 'function') {
              return this.customTooltipFun(param)
            } else {
              return this.tooltipFormatter(param)
            }
          }
        }
      }
    },
    getSeriesOpt() {
      const { data = [] } = this.chartData
      const series = []
      data.map((i, idx) => {
        if (!i.items?.length) return
        let beginIndex = 0
        let endIndex = i.items.length
        let filterData = i.items
        if (i.chartType === '1') {
          const startIdx = i.items.findIndex(label => label.date === this.zoomBeginDate)
          const finIndex = i.items.findIndex(label => label.date === this.zoomEndDate)
          filterData = i.items.slice(
            // 折线图只有一条数据fix
            // beginIndex === -1 ? beginIndex : startIdx,
            startIdx === -1 ? beginIndex : startIdx,
            // endIndex === -1 ? endIndex : finIndex
            finIndex === -1 ? endIndex : finIndex
          )
        }
        const dataArr = this.getItemData(i.items, true, i.chartType)
        filterData = this.getItemData(filterData, false)
        filterData = filterData.filter(item => item.constructor !== Object && item.toString().trim())
        let lineWidth = 1
        if (i.lineWidth) {
          lineWidth = i.lineWidth
        } else {
          lineWidth = this.useWeight ? (i.useColorStops ? this.lineStyleWidth : 1) : this.lineStyleWidth
        }
        let baseSeriesObj = {
          // isShortName 用于修改图例名称 换indicatorDisplayName字段展示
          name: i?.isShortName === '1' ? i.indicatorDisplayName : i.indicatorName || i.signalName,
          type: this.util.getChartType[i.chartType],
          stack: this.isTotal || this.barTypeStyle === 'total' ? 'Total' : null,
          symbol: 'circle',
          smooth: this.seriesSmooth,
          barGap: this.barGap,
          data: dataArr,
          yAxisIndex: i.chartAsis === '1' ? 0 : 1,
          markPoint: {
            data: this.getMarkPointData(i.items),
            symbol: 'image://' + markPointImg,
            symbolSize: [32, 32],
            symbolOffset: [0, -4]
          }
        }
        if (i.stack) {
          baseSeriesObj.stack = i.stack
        }
        let lineSeriesObj = {
          connectNulls: true,
          large: true,
          zlevel: i.zlevel || null, // 控制线图层级
          // sampling: 'average',
          showSymbol: filterData.length === 1 && i.chartType === '1' ? true : i.useSymbol ? true : !!this.showLabelNum,
          showAllSymbol: filterData.length === 1 && i.chartType === '1' ? true : !!this.showLabelNum,
          barWidth: this.barWidth ? this.barWidth : null,
          barMaxWidth: i.chartType === '1' ? null : this.barMaxWidth,
          barMinHeight: i.chartType === '1' ? null : this.barMinHeight,
          lineStyle: {
            type: i.rayType === '2' ? 'dashed' : 'solid',
            width: lineWidth
          }
        }

        const shadowAreaStyle = {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              // 渐变颜色
              {
                offset: this.colorStops,
                color: !i.useColorStops
                  ? this.shadowColor
                    ? this.shadowColor + 30
                    : this.colorRgba
                  : this.lineColor[idx] + 30
              },
              {
                offset: 1,
                color: !i.useColorStops
                  ? this.shadowColor
                    ? this.shadowColor + '00'
                    : this.colorRgba
                  : this.lineColor[idx] + '00'
              }
            ]
          }
        }

        const barItemStyle = {
          normal: {
            // 添加堆叠图中间空隙
            borderColor: this.tipBgColor,
            // borderWidth: 10,
            label: {
              show: this.showLabelNum, // 开启显示
              position: this.labelPosition, // 在上方显示
              formatter: params => {
                let num = Number(params.data) ? Number(params.data) : Number(params.data.value)
                // 调整侧边柱状图添加百分比
                return this.useYAxis && this.chartData.data[0].indicatorUnit && this.barTypeStyle !== 'total'
                  ? this.util.thousands(num, this.fixedNum) + this.chartData.data[0].indicatorUnit
                  : this.util.thousands(num, this.fixedNum)
              }
            }
          }
        }

        const barLabel = {
          // show: this.showInsideLabel,
          show: true,
          lineHeight: 17,
          position: this.labelPosition, // 在上方显示
          textStyle: {
            // 数值样式
            color: this.useYAxis ? '#ffffff' : this.otherTextColor,
            fontSize: 12
          },
          rich: {
            a: {
              color: '#DC5356'
            },
            b: {
              color: '#8EC3A7'
            }
          },
          formatter: params => {
            const num = this.util.thousands(params.data, this.fixedNum)
            if (Number(num) === 0) {
              return ''
            }
            if (this.titleText.indexOf('全球大类资产') > -1) {
              if (num > 0) {
                return '{a|' + num + '}'
              } else {
                return '{b|' + num + '}'
              }
            }
            return num
          }
        }
        // 增加标识线(目前固定为底部正三角形的Y轴灰色虚线，hover无样式)
        const markLine = {
          symbol: this.markLineSymbol.symbol,
          symbolSize: this.markLineSymbol.symbolSize,
          emphasis: {
            lineStyle: {
              width: 1
            }
          },
          label: {
            show: false
          },
          itemStyle: {
            normal: {
              lineStyle: {
                type: this.markLineSymbol.type,
                color: this.markLineSymbol.color
              }
            }
          },
          data: this.markLineList
        }
        const scatterObj = {
          symbolSize: 5,
          symbol: 'emptydiamond'
        }
        const focusEmphasis = {
          disabled: this.usefocusEmphasis,
          focus: 'series'
        }
        lineSeriesObj.markLine = this.markLineList.length > 0 ? markLine : null
        lineSeriesObj.areaStyle = this.isShowShadow || i.useColorStops ? shadowAreaStyle : null
        lineSeriesObj.itemStyle = this.useBarItemStyle ? barItemStyle : null
        lineSeriesObj.emphasis = this.useEmphasis ? focusEmphasis : null
        lineSeriesObj.label = this.showLabelNum ? barLabel : null
        let seriesObj = { ...baseSeriesObj, ...lineSeriesObj }
        if (i.chartType === '5') {
          Object.assign(seriesObj, scatterObj)
        }
        series.push(seriesObj)
      })
      if (this.isTotal) {
        // let areaColor = '#DF4D4D'
        series.forEach((item, index) => {
          if (!this.isTotalUseGradient) {
            item.areaStyle = {
              color: this.getLegendColor()[index],
              opacity: 0.18
            }
          }
          item.itemStyle = {
            normal: {
              lineStyle: {
                width: 1
              }
            }
          }
        })
      }
      return series
    },
    getItemData(data = [], flag, chartType) {
      const dataList = []
      if (!data) return
      const isDateFormatted = inputString => {
        // 匹配YYYY-MM-DD或YYYY-MM格式的日期
        const dateFormatRegex = /^\d{4}-(0[1-9]|1[0-2])(-(0[1-9]|[12][0-9]|3[01]))?$/
        if (dateFormatRegex.test(inputString)) {
          return true
        } else {
          return false
        }
      }
      data.map((item, index) => {
        if (item.date) {
          // 组装数据，判断是否展示原始数据（接口补数情况）
          let newVal = this.util.notEmpty(item.value) ? item.value : '-'
          if (!this.useRawData || chartType === '5') {
            // 默认日期补数
            const date = dayjs(item.date).format(this.dateFormate)
            if (isDateFormatted(date)) {
              newVal = [date, newVal]
            } else {
              // 其他补数
              newVal = [item.date, newVal]
            }
          }
          if (this.useEnds) {
            const obj = {
              value: newVal,
              label: {
                // 默认使用单位
                formatter: par => par.value + '%',
                color: this.tipTextColor,
                fontSize: 10,
                position: item.value > 0 ? 'top' : 'bottom'
              }
            }
            dataList.push(obj)
            return
          }
          if (index === this.selectBarIndex) {
            const obj = {
              value: newVal,
              itemStyle: {
                color: this.barClickColor
              },
              label: {
                position: this.labelPosition
              }
            }
            dataList.push(obj)
            return
          }
          if (this.useComparisonColor && chartType === '2') {
            const obj = {
              value: newVal,
              itemStyle: {
                color:
                  this.casketListColor.find(item => Object.keys(item).includes(String(newVal)))?.[String(newVal)] ||
                  null
              }
            }
            dataList.push(obj)
            return
          }
          dataList.push(newVal)
        }
      })
      return dataList
    },
    getMarkPointData(data = []) {
      let markPointDataList = []
      if (!data) return
      data.map((item, index) => {
        // 处理特殊点问题
        if (
          this.isMarketPointObj.isMarketPointData.length &&
          this.isMarketPointObj.isMarketPointData.includes(item.date)
        ) {
          // 去重处理
          if (!this.markPointIdx.includes(index)) {
            this.markPointIdx.push(index)
          }
        }
        // 其他特殊情况
        if (item[this.isMarketPointVariable] === '1') {
          const obj = {
            xAxis: item.date,
            yAxis: Number(item.value)
          }
          markPointDataList.push(obj)
          this.markPointIdx.push(index)
        } else if (item.markFlag === '1' || item.markFlag === '2') {
          const obj = {
            xAxis: dayjs(item.date).format(this.dateFormate),
            yAxis: Number(item.value),
            symbol: item.markFlag === '1' ? 'image://' + markPointRedImg : 'image://' + markPointGreenImg,
            symbolSize: 19
          }
          markPointDataList.push(obj)
        }
      })
      return markPointDataList
    },
    getZoomBeginDate(date) {
      const { xAxisData = [] } = this.chartData
      const newDate = dayjs(date).format('YYYYMMDD')
      const limit = (arr, num) => {
        const newEl = Number(num)
        var newArr = []
        arr.map(function (x) {
          // 对数组各个数值求差值
          const num = Number(dayjs(x).format('YYYYMMDD'))
          newArr.push(Math.abs(num - newEl))
        })
        // 求最小值的索引
        var index = newArr.indexOf(Math.min.apply(null, newArr))
        return arr[index]
      }
      let beginDate = limit(xAxisData, newDate)
      beginDate = dayjs(beginDate).format(this.dateFormate)
      return beginDate
    },
    dataZoom() {
      const xDatazoom = [
        {
          right: this.xZoomPaddingRight ? this.xZoomPaddingRight : '30%',
          left: this.xZoomPaddingLeft ? this.xZoomPaddingLeft : '27.5%',
          top: this.xZoomPaddingTop ? this.xZoomPaddingTop : null,
          bottom: this.xZoomPaddingbottom ? this.xZoomPaddingbottom : '1%',
          height: 21,
          rangeMode: this.isDraged ? 'percent' : this.zoomBeginDate || this.zoomEndDate ? 'value' : 'percent',
          endValue: this.isDraged ? null : this.zoomEndDate === '' ? null : this.getZoomBeginDate(this.zoomEndDate),
          end: this.isDraged ? this.dragEnd : this.zoomEndDate !== '' ? null : 100,
          // endValue: 20110930,
          startValue: this.isDraged ? null : this.zoomBeginDate ? this.getZoomBeginDate(this.zoomBeginDate) : null,
          start: this.isDraged ? this.dragStart : null,
          moveHandleSize: 0,
          dataBackground: {
            lineStyle: {
              opacity: 0
            },
            areaStyle: {
              color: this.dataZoomBackAreaColor,
              opacity: 0.15
            }
          },
          selectedDataBackground: {
            lineStyle: {
              opacity: 0
            },
            areaStyle: {
              color: this.dataZoomBSelectedBackground,
              opacity: 0.2
            }
          },
          fillerColor: this.fillerColor,
          borderColor: this.dataZoomBorderColor,
          handleIcon: this.handleIcon,
          handleSize: '21px',
          textStyle: {
            color: this.dataZoomTextColor
          }
        }
      ]
      const yDataZoom = [
        {
          type: 'slider',
          yAxisIndex: 0,
          left: this.yZoomPaddingLeft ? this.yZoomPaddingLeft : '1%',
          top: this.yZoomPaddingTop ? this.yZoomPaddingTop : '28%',
          bottom: this.yZoomPaddingbottom ? this.yZoomPaddingbottom : '20%',
          width: 20,
          rangeMode: this.isDraged ? 'percent' : this.zoomBeginDate || this.zoomEndDate ? 'value' : 'percent',
          endValue: this.isDraged ? null : this.zoomEndDate === '' ? null : this.getZoomBeginDate(this.zoomEndDate),
          end: this.isDraged ? this.dragEnd : this.zoomEndDate !== '' ? null : 100,
          // endValue: 20110930,
          startValue: this.isDraged ? null : this.getZoomBeginDate(this.zoomBeginDate),
          start: this.isDraged ? this.dragStart : null,
          moveHandleSize: 0,
          dataBackground: {
            lineStyle: {
              opacity: 0
            },
            areaStyle: {
              color: this.dataZoomBackAreaColor
            }
          },
          selectedDataBackground: {
            lineStyle: {
              opacity: 0
            },
            areaStyle: {
              color: this.dataZoomBSelectedBackground,
              opacity: 0.3
            }
          },
          fillerColor: this.fillerColor,
          borderColor: this.dataZoomBorderColor,
          handleIcon: this.handleIcon,
          handleSize: 20,
          textStyle: {
            color: this.dataZoomTextColor
          }
        }
      ]
      return this.useYAxis ? yDataZoom : xDatazoom
    },
    // 自定义图例 选中交互事件
    customLegendSelect(val) {
      if (this.$globalchar) {
        let { name, state = true } = val
        this.$globalchar.dispatchAction({
          type: state ? 'legendSelect' : 'legendUnSelect',
          name: name // 需要选中的图例项名称,
        })
      }
    }
  }
}
