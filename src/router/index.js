import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty'
    },
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/OrderPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
