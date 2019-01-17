// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 组件
import JyUI from './components'

// 导入element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 混入(公共方法)
import Mixin from './mixin.js'
// Axios
import axios from 'axios'
// 配置文件
import {
  isDebug,
  loginUrl,
  loginJiuyescmTicket
} from '@configs'

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.use(JyUI)
Vue.use(ElementUI)

// 引入公共样式
require('./assets/styles/base.less')
require('./assets/styles/index.less')

// 请求状态判断
axios.interceptors.request.use(function (config) {
  if (config.method.toUpperCase() === 'GET' && config.url !== undefined) {
    if (config.params === undefined || config.params === 'undefined') {
      config.params = {}
    }
    config.params.__preventCache = new Date().getTime()
  }
  if (isDebug) {
    config.headers['login_jiuyescm_ticket'] = loginJiuyescmTicket
  } else {
    config.withCredentials = true
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 返回状态判断
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status * 1 === 401) {
    window.location.href = loginUrl + '&redirect=' + encodeURIComponent(document.URL)
  } else if (error.response.status * 1 === 400) {
    ElementUI.Message.error(error.response.data.message)
  } else if (error.response.status * 1 === 403) {
    ElementUI.Message.error(error.response.data.message)
  } else {
    ElementUI.Message.error(error.response.data.message)
  }
})

const render = new Vue({
  el: '#app',
  mixins: [Mixin],
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

Vue.use({
  render
})
