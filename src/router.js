import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goodsInfo from './views/goodsinfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/goodsinfo',
      name: 'goodsinfo',
      component: goodsInfo
    }
  ]
})
