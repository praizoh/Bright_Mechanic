import Vue from 'vue'
import App from './App.vue'
// font awesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faTools, faPeopleCarry, faPowerOff, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret,faUser, faTools, faPeopleCarry, faPowerOff, faUserCog) 
Vue.component('font-awesome-icon', FontAwesomeIcon)
import router from './router'
// import store from './store'
import store from './store/index.js'
import vuetify from './plugins/vuetify';

import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

// Axios.defaults.baseURL = "http://192.168.1.102:8081"
Axios.defaults.baseURL = "http://localhost:8081"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  components: { App },
  render: h => h(App)
}).$mount('#app')
