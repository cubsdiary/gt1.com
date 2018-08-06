import Vue from 'vue'
import App from './App.vue'
import router from './router'
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
// axios.defaults.baseURL = 'https://www.gt1.shop/'
axios.defaults.baseURL = 'http://192.168.0.113:8080/gt/'
Vue.prototype.baseUrl = axios.defaults.baseURL

Vue.prototype.imgUrl = 'http://192.168.0.113:8080/gt/download?id='

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
