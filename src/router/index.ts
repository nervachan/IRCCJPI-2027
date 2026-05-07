import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoaded,
} from 'vue-router'

import Home from '../pages/Home.vue'
import SubmitEntries from '../pages/SubmitEntries.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/submit',
      name: 'submit',
      component: SubmitEntries,
    },
  ],
  scrollBehavior(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalizedLoaded,
    savedPosition: { left: number; top: number } | null,
  ) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router
