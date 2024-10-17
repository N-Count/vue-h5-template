// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import util from '@/utils/index'
// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn
// 通用组件注册
import '@/components/index'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'amfe-flexible'

import constant from '@/libs/constant'
// 引入echarts
import * as echarts from 'echarts'

// filters
import './filters'

// 通用全局指令
import directives from '@/libs/directives'
// 指令
Vue.use(directives)
Vue.config.productionTip = false
// ecahrts 全局挂载
Vue.prototype.$echarts = echarts
// echarts 颜色挂载
Vue.prototype.constant = constant
//  工具方法挂载
Vue.prototype.util = util
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
