import Vue from 'vue'
import Router from 'vue-router'
import allSearch from './views/allSearch.vue'
import goodsInfo from './views/goodsinfo.vue'
import searchCode from './views/searchCode.vue'
import searchModal from './views/searchModal.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
