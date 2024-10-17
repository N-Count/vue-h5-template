<template>
  <div class="echart-data-box">
    <div class="jgy-chart-comp-box" :style="{ width: chartWidth, height: chartHeight }">
      <!-- 新增自定义图例功能，主要使用在图例需要下拉选择的情况下。（20230921版本新增功能——lsq） -->
      <!-- <CustomLegend
        v-if="useCustomLegend && show"
        v-bind="$attrs"
        v-on="$listeners"
        @legendSelect="customLegendSelect"
        :legendOption="customLegendOption"
      >
      </CustomLegend> -->
      <div v-if="show" :id="id" :style="{ width: chartWidth, height: chartHeight }"></div>
      <no-data
        v-if="!show"
        :noDataCopy="noDataCopy"
        :style="{ width: chartWidth, height: chartHeight }"
        :noDataUrl="noDataImg"
      />
    </div>
    <div v-if="showDataSourceFrom && show" class="data-origin">
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
// 折线图
import dayjs from 'dayjs'
import mix from './mix'
import noData from './noData.vue'
// import CustomLegend from './customLegend/index.vue'

// let chart = null
export default {
  name: 'JyChart',
  components: {
    'no-data': noData
    // CustomLegend
  },
  props: {
    autoResize: {
      type: Boolean,
      default: true
    },
    jgtChartData: {
      type: Array,
      default: () => []
    },
    renderType: {
      type: String,
      default: 'canvas'
    },
    chartHeight: {
      type: String,
      default: '398px'
    },
    id: {
      type: [String, Number],
      default: 'lineChart'
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
    // 结束时间
    zoomEndDate: {
      type: String,
      default: ''
    },
    showDataSourceFrom: {
      type: Boolean,
      default: false
    },
    // 是否显示阴影
    isShowShadow: {
      type: Boolean,
      default: false
    },
    // 自定义阴影颜色
    shadowColor: {
      type: String,
      default: null
    },
    // 控制自定义柱状图color
    useAssignedBarColor: {
      type: Boolean,
      default: false
    },
    // 控制自定义折线图color
    useAssignedLineColor: {
      type: Boolean,
      default: false
    },
    // 自定义折线图color
    assignedBarColor: {
      type: Array,
      default: () => ['#DC5356']
    },
    // 自定义柱状图color
    // 注意这个要在自己引用的组件内完成换肤切换color，本参数只用作显示，不做换肤处理
    assignedLineColor: {
      type: Array,
      default: () => ['#DC5356']
    },
    // 是否显示指标图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 保留小数位
    fixedNum: {
      type: Number,
      default: 2
    },
    // 是否折线图显示权重对比，线条粗细对比
    useWeight: {
      type: Boolean,
      default: false
    },
    // 图表上右下左padding
    gridPadding: {
      type: Array,
      default: () => []
    },
    // 指标的位置
    legendsRight: {
      type: Number,
      default: 50
    },
    legendsTop: {
      type: Number,
      default: 5
    },
    legendsPosition: {
      type: String,
      default: ''
    },
    // 是否显示单位
    useYAxisUnit: {
      type: Boolean,
      default: true
    },
    // 刻度轴保留小数位
    fixScaleNumber: {
      type: Number,
      default: 0
    },
    // 是否显示zoom轴
    useDataZoom: {
      type: Boolean,
      default: true
    },
    // 图表Y轴zoom上下左padding
    yZoomPaddingTop: {
      type: String,
      default: ''
    },
    yZoomPaddingLeft: {
      type: String,
      default: ''
    },
    yZoomPaddingbottom: {
      type: String,
      default: ''
    },
    // 图表X轴zoom上下左padding
    xZoomPaddingTop: {
      type: String,
      default: ''
    },
    xZoomPaddingLeft: {
      type: String,
      default: ''
    },
    xZoomPaddingbottom: {
      type: String,
      default: ''
    },
    xZoomPaddingRight: {
      type: String,
      default: ''
    },
    // tooltips是否在body层
    tooltipsToBody: {
      type: Boolean,
      default: false
    },
    // 使用Y轴作为刻度轴，使用X轴作为data轴
    useYAxis: {
      type: Boolean,
      default: false
    },
    // 自定义最大百分占比 （以随机传maxValue等比: 'dataMax' | 固定值等比： 100 | chart自动美化等比：null）
    customPercentage: {
      type: [String, Number, Object],
      default: 'dataMax'
    },
    // Y轴自定义最大百分占比 （以随机传maxValue等比: 'dataMax' | 固定值等比： 100 | chart自动美化等比：null）
    useYAxisCustom: {
      type: [String, Number, Object],
      default: null
    },
    // 使用非date x轴
    isTextxAxis: {
      type: Boolean,
      default: false
    },
    // 刻度轴旋转
    xAxisRotate: {
      type: Boolean,
      default: false
    },
    // 设置旋转角度
    rotate: {
      type: Number,
      default: 0
    },
    // 最小值保留小数位，影响图表曲率
    fixMinNumber: {
      type: Number,
      default: 0
    },
    // 自定义排序颜色定义
    customSortColor: {
      type: Array,
      default: () => []
    },
    // 是否为堆叠图
    barTypeStyle: {
      type: String,
      default: null
    },
    // tooltips 背景hover效果
    axisPointerType: {
      type: String,
      default: 'line'
    },
    // 刻度自适应两边距离
    containLabel: {
      type: Boolean,
      default: false
    },
    // 是否显示数值
    showLabelNum: {
      type: Boolean,
      default: false
    },
    // 数值显示位置
    labelPosition: {
      type: String,
      default: 'top'
    },
    // 数值是否支持自定义显示位置
    customLabelPosition: {
      type: Boolean,
      default: false
    },
    // 选中index
    selectBarIndex: [String, Number],
    // 单独设置柱状图宽度
    barWidth: [Number],
    // 使用拖动zoom方法
    useDragRequest: {
      type: Boolean,
      default: false
    },
    // tooltip显示unti，只适用于tooltips
    tooltipsUnit: {
      type: String,
      default: null
      // 标注线
    },
    markLineList: {
      type: Array,
      default: () => []
    },
    // y轴起始刻度线
    yAxisLineShow: {
      type: Boolean,
      default: true
    },
    // y轴刻度线类型
    yAxisSplitLineType: {
      type: String,
      default: 'dotted'
    },
    useEnds: {
      type: Boolean,
      default: false
    },
    // 多条柱状图偏移位置设置/默认30%
    barGap: {
      type: String,
      default: '0'
    },
    // X轴刻度线网格单位
    xAxisSplitNum: {
      type: Number,
      default: 5
    },
    xSplitLineShow: {
      type: Boolean,
      default: true
    },
    useUndulation: {
      type: Boolean,
      default: false
    },
    useBarItemStyle: {
      type: Boolean,
      default: false
    },
    // 使用原始数据（接口做了补数的情况）
    useRawData: {
      type: Boolean,
      default: true
    },
    // 新加配置
    // y轴是否显示
    yAxisShow: {
      type: Boolean,
      default: true
    },
    xAxisShow: {
      type: Boolean,
      default: true
    },
    lineStyleWidth: {
      type: Number,
      default: 2
    },
    // 调整图例宽度
    legendWidth: {
      type: String,
      default: 'auto'
    },
    colorStops: {
      type: Number,
      default: 0
    },
    yAxissplitLineShow: {
      type: Boolean,
      default: true
    },
    yAxisAxisTickShow: {
      type: Boolean,
      default: true
    },
    yAxisInterval: {
      type: Number,
      default: null
    },
    // 是否使用自定义图例
    useCustomLegend: {
      type: Boolean,
      default: false
    },
    // 自定义图例配置
    customLegendOption: {
      type: Object,
      default: () => ({})
    },
    // 自定义日期格式化, 默认YYYY-MM-DD
    dateFormate: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    // 是否使用自定义标题
    useCustomTitle: {
      type: Boolean,
      default: false
    },
    // 自定义控制折线变曲线
    seriesSmooth: {
      type: Boolean,
      default: false
    },
    isTooltipReturns: {
      type: Boolean,
      default: false
    },
    // 在外部自定义追加特殊参数
    customSetParams: {
      type: String,
      default: ''
    },
    // 是否给每一项添加字段
    isLegendName: {
      type: String,
      default: ''
    },
    // 标识线对象
    isMarketPointObj: {
      type: Object,
      default: () => {
        return {
          isMarketPointIcon: 'icon-yichangbaojing', // 默认债基异常监控icon
          isMarketPointText: '净值异常波动', //  默认债基异常监控文案
          isMarketPointClass: 'market-isAbnormal',
          isMarketPointData: []
        }
      }
    },
    // 标识线变量
    isMarketPointVariable: {
      type: String,
      default: '' // 默认债基异常监控变量
    },
    // 折线堆叠图是否使用focus高亮显示
    useEmphasis: {
      type: Boolean,
      default: false
    },
    // 是否折线堆叠图
    isTotal: {
      type: Boolean,
      default: false
    },
    // 是否折线堆叠图 渐变
    isTotalUseGradient: {
      type: Boolean,
      default: false
    },
    // 特殊标签处，具体日期
    specialDate: {
      type: String,
      default: ''
    },
    // 特殊标签处理，添加icon
    useAxisLabelIcon: {
      type: Boolean,
      default: false
    },
    // 预测日期数组
    specialDateList: {
      type: Array,
      default: () => []
    },
    // 是否使用图表折线距离左右轴间隙
    useBoundaryGap: {
      type: Boolean,
      default: true
    },
    // tooltips hover title
    tooltipsHoverTitle: {
      type: String,
      default: null
    },
    // 柱状图最大宽度
    barMaxWidth: {
      type: String,
      default: '26px'
    },
    // 图表hover事件回调
    hoverPointCountFun: {
      type: Function,
      default: () => {}
    },
    // Y轴label是否可以点击
    labelTriggerEven: {
      type: Boolean,
      default: false
    },
    // 暂无数据文案
    noDataCopy: {
      type: String,
      default: '暂无数据'
    },
    // 是否tooltip展示小标题
    minTooltipTitle: {
      type: Boolean,
      default: false
    },
    // 设置图表清晰度
    devicePixelRatio: {
      type: Number,
      default: 2
    },
    // 指标线默认选中的
    legendSelected: {
      type: Object,
      default: () => {}
    },
    // 指标线默认选中模式
    legendSelectedMode: {
      type: String,
      default: 'multiple'
    },
    // Y轴坐标轴分割刻度显示成整数
    yAxisMinInterval: {
      type: [String, Number],
      default: null
    },
    // scale设置为true后，坐标刻度不会从0开始
    yAxisScaleLeft: {
      type: Boolean,
      default: true
    },
    // scale设置为true后，坐标刻度不会从0开始
    yAxisScaleRight: {
      type: Boolean,
      default: true
    },
    // 设置柱状图最小高度
    barMinHeight: {
      type: Number,
      default: 2
    },
    // 使用值对比匹配颜色
    useComparisonColor: {
      type: Boolean,
      default: false
    },
    //
    xAxisInterval: {
      type: [Number, String],
      default: 0
    },
    // 图表gover高亮开关
    usefocusEmphasis: {
      type: Boolean,
      default: false
    },
    // 当数据太多，色值不够时，是否复用填充
    useLegendFillColor: {
      type: Boolean,
      default: false
    },
    // 自定义复用色值透明度
    useLegendFillColorOpacity: {
      type: Number,
      default: 0.7
    },
    // 是否展示Y轴刻度名称
    showYAxisLabel: {
      type: Boolean,
      default: true
    },
    // 自定义tooltip展示内容函数
    customTooltipFun: {
      type: Function,
      default: null
    },
    // 是否开启图例点击事件
    openLegendClick: {
      type: Boolean,
      default: false
    }
  },
  mixins: [mix],
  methods: {
    tooltipFormatter(param = []) {
      let str = ''
      let headerFlag = false
      let middleFlag = false
      let firstFlag = true
      let realValue = ''
      if (!this.hoverFlag) {
        this.$emit('hoverPointCountFun', true)
        this.hoverFlag = true
      }
      if (this.isTooltipReturns || this.minTooltipTitle) {
        const dataIndexList = this.jgtChartData.map(i => i.items?.length || 0)
        const dataMaxIndex = this.findMaxIndex(dataIndexList)
        // console.log(dataMaxIndex, param)
        const { dataIndex } = param[dataMaxIndex] || param[0]
        const dataList = this.jgtChartData[0]?.items || []
        realValue = dataList[dataIndex]?.realValue || '' || dataList[dataIndex]?.dateDetail || ''
      }

      param.forEach((item, index) => {
        const { isMarketPointClass, isMarketPointIcon, isMarketPointText } = this.isMarketPointObj
        const { name, seriesName, value, seriesType, dataIndex, axisValue } = item
        // 数据为空不展示tips的逻辑
        if (value && value !== '-') {
          // 处理名字追加问题
          let newSeriesName =
            this.isLegendName && this.customIndex === index ? seriesName + this.isLegendName : seriesName
          let customName = this.isLegendName && this.customIndex === index ? this.isLegendName : ''

          let newVal = this.useRawData ? value : value[1]
          if (item.componentSubType === 'scatter') {
            newVal = value[1]
          }
          if (!newVal && newVal !== 0) return
          const pointIdx = this.markPointIdx.indexOf(dataIndex)
          let showMarkPoint = false
          if (pointIdx !== -1) {
            showMarkPoint = true
          }
          let html = `
          <span style="background-color: ${item.color};height: ${
            seriesType === 'bar' ? '8px' : '2px'
          };width:8px;margin-right: 4px;margin-top: -2px;vertical-align: middle; display: ${
            seriesType === 'bar' || this.showLegend ? 'inline-block' : 'none'
          }"></span>`
          if (item.componentSubType === 'scatter') {
            html = `<span style="border:2px solid ${
              item.color
            };transform: rotate(45deg);background: #fff;box-sizing: border-box;height: 8px;width:8px;margin-right: 4px;margin-top: -2px;vertical-align: middle; display: ${
              seriesType === 'bar' || this.showLegend ? 'inline-block' : 'none'
            }"></span>`
          }
          const labelNameStr = `<span class="jgy-chart-tooltip-item" style="float:left; " >${html}
          <span  >${seriesName.indexOf('series') > -1 ? name : seriesName}${customName}</span>
          </span>
            <span class="jgy-chart-tooltip-item" style="float:right; margin-left: 20px; font-size: 12px;" >
                    ${this.util.thousands(newVal, this.fixedNum)}${
            (newVal || newVal === 0) && this.chartData.unit[newSeriesName]
              ? `<span>${this.chartData.unit[newSeriesName]}</span>`
              : this.tooltipsUnit
              ? this.tooltipsUnit
              : ''
          }</span> <br>`

          let minTitle = this.minTooltipTitle && realValue ? `<p>${realValue}</p>` : ''
          let headerDom = `<span style="margin: 8px 0; display: block" class="jgy-chart-tooltip-title" >
          <p>${Date.parse(name) ? dayjs(name).format(`${this.dateFormate}`) : this.isTextxAxis ? name : ''}</p>
          ${minTitle}
          </span>`
          // </span>`
          let pointDom = `<div class="${isMarketPointClass}" style="margin-bottom: 8px; font-size:12px;"><i class="iconfont ${isMarketPointIcon}" style="margin-right: 4px"></i><span>${isMarketPointText}</span></div>`
          // 精选基金 标识线 hover展示调仓记录

          let hoverTitle = `<span style="margin-bottom: 6px; display: block;font-size: 12px; color: #dc4e37" >
          ${this.tooltipsHoverTitle}
          </span>`

          str += `<div >
            <div style="font-size: 12px; color: red">
                      ${
                        this.tooltipsHoverTitle && firstFlag && this.specialDateList.includes(axisValue)
                          ? hoverTitle
                          : ''
                      }
                    </div>
                    ${headerFlag ? '' : headerDom}
                    ${showMarkPoint ? (middleFlag ? '' : pointDom) : ''}
                    <div  class="jgy-chart-tooltip-content">
                    ${newVal || newVal === 0 ? labelNameStr : ''}

                    </div>
                  </div>`
          headerFlag = true
          middleFlag = true
          firstFlag = false
        }
      })

      if (this.isTooltipReturns && realValue) {
        str += `<div>
                  <div class="jgy-chart-tooltip-content">
                   <span class="jgy-chart-tooltip-item" style="float:left; ">
                    <span>日回报</span>
                   </span>
                   <span class="jgy-chart-tooltip-item" style="float:right; margin-left: 20px; font-size: 12px;">
                   ${realValue}%
                   </span>
                   <br>
                  </div>
                </div>`
      }
      return str
    },
    findMaxIndex(arr) {
      if (arr.length === 0) {
        return -1 // 返回-1表示数组为空
      }
      const { maxIndex } = arr.reduce(
        (acc, current, index) => {
          if (current > acc.max) {
            return { max: current, maxIndex: index }
          }
          return acc
        },
        { max: arr[0], maxIndex: 0 }
      )

      return maxIndex // 返回最大值的下标
    },
    setOptions(expectedData = {}) {
      this.returnFalse()
      let option = {
        title: this.getTitleProps(),
        color: this.getLegendColor(),
        legend: this.showLegend ? this.getLegendProps() : null,
        grid: this.grid(),
        tooltip: this.tooltip(),
        xAxis: this.xAxis(),
        dataZoom: this.useDataZoom ? this.dataZoom() : null,
        yAxis: this.yAxis(),
        series: this.getSeriesOpt()
      }
      if (this.chartData.isArea) {
        option.series.areaStyle = {
          color: this.lineColor,
          opacity: 1
        }
      }
      this.$globalchar.clear()
      this.$globalchar.setOption(option, { notMerge: true })
      this.$globalchar.resize()
      // 监听图例点击事件
      if (this.openLegendClick) {
        let that = this
        this.$globalchar.on('legendselectchanged', param => {
          const { name, selected } = param
          let res = {
            name: name,
            status: selected[name],
            statusText: selected[name] ? '展示' : '隐藏',
            source: param
          }
          that.$emit('chart-legend-change', res)
        })
      }
    },
    // 销毁chart实例
    disposeChart() {
      if (this.$globalchar) {
        this.$globalchar.dispose()
        this.$globalchar = null
        this.show = false
      }
    }
  },
  created() {}
}
</script>
<style scoped lang="scss">
.echart-data-box {
  margin: 10px 0;
  .data-source-from {
    font-size: 12px;
    font-weight: bolder;
    margin: 5px 20px;
  }
  .data-source-unit {
    margin-left: 10px;
  }
  .data-origin {
    padding: 0 20px;
    .data-origin-item {
      display: flex;
      align-items: top;
      span:first-child {
        font-size: 12px;
        min-width: 70px;
        text-align: right;
      }
      span:nth-child(2) {
        font-size: 12px;
        line-height: 17px;
      }
      .el-form-item__label {
        line-height: 17px;
      }
    }
  }

  .jgy-chart-comp-box {
    position: relative;
  }
}
// 债基异常监控样式
::v-deep .market-isAbnormal {
  color: #dc4e37;
}
// 债基异常监控样式
::v-deep .market-triangle {
  display: flex;
  align-items: center;
}

::v-deep .icon-triangle {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 5px solid #a8a8a8;
  margin-left: 1px;
  & + span {
    margin-left: 6px;
  }
}

.echart-tooltips-box {
  background: (0, 0, 0, 0.4);
}
</style>
