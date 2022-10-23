import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/useractivity',
      name: 'user activity',
      component: () => import('../views/UserActivity.vue')
    },
    {
      path: '/otheractivty',
      name: 'other activity',
      component: () => import('../views/OtherUserActivity.vue')
    },
    {
      path: '/addworkout',
      name: 'add workout',
      component: () => import('../views/AddWorkout.vue')
    },
    {
      path: '/generalstatistics',
      name: 'general statistics',
      component: () => import('../views/GeneralStatistics.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: StoreView,
    },
  ]
})

export default router