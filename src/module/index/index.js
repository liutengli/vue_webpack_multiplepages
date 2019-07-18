import Vue from 'vue'
import App from './index.vue'
import router from './router/index_router'
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
  router,
  template: '<App/>',
  components: { App }
})
