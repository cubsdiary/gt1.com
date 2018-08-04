import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'

import '@/assets/font/iconfont.css'
import '@/common/api'

Vue.use(Vueaxios, axios)

// axios.defaults.baseURL = 'https://www.gt1.shop/'
axios.defaults.baseURL = 'http://192.168.0.113:8080/gt/'
Vue.prototype.baseUrl = axios.defaults.baseURL

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
