import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import aboutus from '../views/aboutus.vue'
import allSearch from '../views/allSearch.vue'
import goodsInfo from '../views/goodsinfo.vue'
import searchCode from '../views/searchCode.vue'
import searchModal from '../views/searchModal.vue'
Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active-class',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: home
    }, {
      path: '/aboutus',
      component: aboutus
    }, {
      path: '/allsearch/:classify',
      name: 'allSearch',
      component: allSearch
    }, {
      path: '/goodsinfo',
      component: goodsInfo
    }, {
      path: '/searchmodal',
      component: searchModal
    }, {
      path: '/searchcode',
      component: searchCode
    }, {
      path: '*',
      component: home
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   next()
// })

export default router
