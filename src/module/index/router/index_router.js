import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/module/index/index.vue'], resolve),
      name: 'index'
    },
    {
      path: '/oilPrice',
      component: resolve => require(['@/module/oilPrice/oilPrice.vue'], resolve),
      name: 'OilPrice',
    },
  ]
})
