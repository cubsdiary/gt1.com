import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import * as types from '../store/mutation-types'
import home from '../views/home.vue'
import aboutus from '../views/aboutus.vue'
import allSearch from '../views/allSearch.vue'
import goodsInfo from '../views/goodsinfo.vue'
import searchCode from '../views/searchCode.vue'
import searchModal from '../views/searchModal.vue'
Vue.use(Router)
const routers = [
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
]
const productRouters = [
  {
    path: 'allsearch'
  }, {
    path: 'goodsinfo'
  }, {
    path: 'searchmodal'
  }, {
    path: 'searchcode'
  }
]
const router = new Router({
  linkActiveClass: 'active-class',
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  let flag = true
  productRouters.forEach(item => {
    if (to.path.indexOf(item.path) > -1) {
      flag = false
    }
  })
  if (flag) {
    store.commit(types.SET_NOW_CLASSIFY, {})
  }
  next()
})

export default router
