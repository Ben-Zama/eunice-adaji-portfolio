import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Work from '../pages/work.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
