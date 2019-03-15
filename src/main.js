import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/common/reast.css'
import '@/assets/font/iconfont.css'
import '@/common/api'
Vue.config.productionTip = false
Vue.use(Vueaxios, axios)
Vue.use(iView)
axios.defaults.baseURL = ''
Vue.prototype.baseUrl = axios.defaults.baseURL

Vue.prototype.imgUrl = ''

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
