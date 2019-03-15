import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import * as types from '../store/mutation-types'
import home from '../views/home.vue'
// import aboutus from '../views/aboutus.vue'
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
    path: '/allsearch/:classify',
    name: 'allSearch',
    props: route => ({
      id: parseInt(route.params.classify)
    }),
    component: allSearch
  }, {
    path: '/goodsinfo/:goodsid',
    props: route => ({
      goodsid: parseInt(route.params.goodsid)
    }),
    component: goodsInfo
  }, {
    path: '/searchmodal',
    component: searchModal
  }, {
    path: '/searchcode/:code',
    props: route => ({
      code: route.params.code
    }),
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
