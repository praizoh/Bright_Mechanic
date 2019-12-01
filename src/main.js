import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/index.js'
import vuetify from './plugins/vuetify';

// import Axios from 'axios'

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token');
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

// Axios.defaults.baseURL = "http://192.168.43.70:3000"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
