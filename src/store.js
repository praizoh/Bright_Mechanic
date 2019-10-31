import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dealers:[
      { companyName: 'Benson Car Parts',  Address:'Shop 34, Computer Village, Ikeja, Lagos' , Phone:'0801 000 0000'},
      { companyName: 'Chibosu General Merchant',  Address:'Number 89, Salvation Road,Mobil, Computer Village,Ibadan' , Phone:'0807 090 6459'},
      { companyName: 'Bodija Car Part Shop',  Address:'Shop 34, Computer Village' , Phone:'0801 000 0000'},
      { companyName: 'Uchendum Shop',  Address:'Shop 34, Computer Village,Ikeja, Lagos' , Phone:'0801 987 4321'},
      { companyName: 'Prestique Cars',  Address:'Shop 34, Computer Village,Ikeja, Lagos' , Phone:'0810 750 8709'},
    ],
  },
  mutations: {
    
  },
  actions: {

  }
})
