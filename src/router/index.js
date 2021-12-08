import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

import Bundesliga from '../components/Allemagne/Bundesliga.vue'


import PremierLeague from '../components/Angleterre/PremierLeague.vue'
// import Matchs from '../components/Angleterre/Matchs.vue'


import Liga from '../components/Espagne/Liga.vue'
import Ligue1 from '../components/France/Ligue1.vue'
import SerieA from '../components/Italie/SerieA.vue'

import Test from '../components/Test.vue'

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
  // {
  //   path: '/premierleague/matchs',
  //   name: 'Matchs Premier League',
  //   component: Matchs
  // },
  {
    path: '/bundesliga',
    name: 'Bundesliga',
    component: Bundesliga
  },
  {
    path: '/serieA',
    name: 'Serie A',
    component: SerieA
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
