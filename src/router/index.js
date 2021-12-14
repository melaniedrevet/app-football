import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Championnat from '../components/Championnat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:code',
    name: 'Championnat',
    component: Championnat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
