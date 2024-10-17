import Vue from 'vue'
import JyChart from './echarts/JgyChart.vue'
import RadarChart from './echarts/RadarChart.vue'
import JgyChartCustom from './echarts/JgyChartCustom/index.vue'
// 挂载折现图&柱状图
Vue.component('JyChart', JyChart)
// 挂载雷达图
Vue.component('RadarChart', RadarChart)
// 挂载自定义折现图表
Vue.component('JgyChartCustom', JgyChartCustom)
