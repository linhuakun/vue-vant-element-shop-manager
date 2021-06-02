import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login/login.vue'
import Bigdata from '../views/bigbar/bigbar.vue'
import Moment from '../views/moment/Moment.vue'
import User from '../views/user/user.vue'
import Order from '../views/order/order.vue' 
import Profile from '../views/profile/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/bigdata',
    component:Bigdata 
  },
  {
    path:'/moment',
    component:Moment
  },
  {
    path:'/user',
    component:User
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  meta:{
    footShow:true,
  },
})



export default router
