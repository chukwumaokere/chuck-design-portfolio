import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '@/views/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    meta: {
      title: "404 — Page Not Found"
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  hash: false,
  routes
})

export default router
