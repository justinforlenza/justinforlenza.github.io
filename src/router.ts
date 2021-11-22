import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'

import RamblingsHome from './pages/ramblings/RamblingsHome.vue'
import Rambling from './pages/ramblings/Rambling.vue'

import Projects from './pages/Projects.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '',
  linkExactActiveClass: '',
  routes: [
    {
      path: '/',
      redirect: '/home',
      beforeEnter: (to, from, next) => {
        if (sessionStorage.redirect) {
          const redirect = sessionStorage.redirect
          delete sessionStorage.redirect
          next(redirect)
        }
        next()
      }
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/ramblings',
      component: RamblingsHome
    },
    {
      path: '/ramblings/:slug',
      component: Rambling
    }
  ]
})

export default router