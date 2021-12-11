import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

import Bundesliga from '../components/Bundesliga.vue'
import PremierLeague from '../components/PremierLeague.vue'
import Liga from '../components/Liga.vue'
import Ligue1 from '../components/Ligue1.vue'
import SerieA from '../components/SerieA.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ligue1',
    name: 'Ligue 1',
    component: Ligue1
  },
  {
    path: '/liga',
    name: 'Liga',
    component: Liga
  },
  {
    path: '/premierleague',
    name: 'Premier League',
    component: PremierLeague
  },
  {
    path: '/bundesliga',
    name: 'Bundesliga',
    component: Bundesliga
  },
  {
    path: '/serieA',
    name: 'Serie A',
    component: SerieA
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
