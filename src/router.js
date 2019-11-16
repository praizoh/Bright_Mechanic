import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dealers from './views/Dealers.vue'
import AddItem from './views/AddItem.vue'
import Item from './views/Item.vue'
import Profile from './views/Profile.vue'
import DealersInfo from './views/DealersInfo.vue'
import EditDealerInfo from './views/EditDealerInfo.vue'
import AttendLit from './views/AttendLit.vue'
import AttendLitFree from './views/AttendLitFree.vue'
import AttendLitPaid from './views/AttendLitPaid.vue'
import ManageUser from './views/ManageUser.vue'
import ManageUserProfile from './views/ManageUserProfile.vue'
import AddUser from './views/AddUser.vue'
import EditUser from './views/EditUser.vue'
import AddDealer from './views/AddDealer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/attendLit',
      name: 'login',
      component: AttendLit
    },
    {
      path: '/attendLitFree',
      name: 'attendLitFree',
      component: AttendLitFree
    },
    {
      path: '/attendLitPaid',
      name: 'attendLitPaid',
      component: AttendLitPaid
    },
    {
      path: '/dealers',
      name: 'dealers',
      component: Dealers
    },
    {
      path: '/dealers/dealerInfo',
      name: 'dealerInfo',
      component: DealersInfo
    },
    {
      path: '/item/addItem',
      name: 'addItem',
      component: AddItem
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/dealers/editDealerInfo',
      name: 'editDealerInfo',
      component: EditDealerInfo
    },
    {
      path: '/manageUsers',
      name: 'manageUsers',
      component: ManageUser
    },
    {
      path: '/manageUsers/manageUserProflie',
      name: 'ManageUserProfile',
      component: ManageUserProfile
    },
    {
      path: '/manageUsers/addUser',
      name: 'AddUser',
      component: AddUser
    },
    
    {
      path: '/dealers/addDealer',
      name: 'AddDealer',
      component: AddDealer
    },
    
    
    {
      path: '/manageUsers/editUser',
      name: 'EdiUser',
      component: EditUser
    },
    
    
    {
      path: '',
      name: '',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
