import Vue from 'vue'
import Vuex from 'vuex'

import { login } from './login';
import { dealers } from './dealers';
import { user } from './user';
import { item } from './item';

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    login:login,
    dealers:dealers,
    user:user,
    item:item
    
  }
})
