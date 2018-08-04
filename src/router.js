import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import aboutus from './views/aboutus.vue'
import allSearch from './views/allSearch.vue'
import goodsInfo from './views/goodsinfo.vue'
import searchCode from './views/searchCode.vue'
import searchModal from './views/searchModal.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active-class',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }, {
      path: '/allsearch',
      name: 'allSearch',
      component: allSearch
    }, {
      path: '/goodsinfo',
      name: 'goodsinfo',
      component: goodsInfo
    }, {
      path: '/searchmodal',
      name: 'searchmodal',
      component: searchModal
    }, {
      path: '/searchcode',
      name: 'searchcode',
      component: searchCode
    }
  ]
})
