// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Toast, Row, Col } from 'vant'
let vantPlugins = [Button, List, Cell, Tabbar, TabbarItem, Toast, Row, Col]
vantPlugins.forEach(plugin => {
  Vue.use(plugin)
})
