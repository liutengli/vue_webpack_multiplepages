import Vue from 'vue'
import App from './oilPrice.vue'
import './common/css/common.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
