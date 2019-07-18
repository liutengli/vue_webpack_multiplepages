import Vue from 'vue'
import App from './userManage.vue'
import './common/css/common.css'
import 'lib-flexible'
import 'babel-polyfill'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
