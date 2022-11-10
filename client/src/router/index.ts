import LoginViewVue from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'

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
      path: '/thatactivity',
      name: 'thatactivity',
      component: () => import('../views/thatActivity.vue')
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
      name: 'generalstatistics',
      component: () => import('../views/GeneralStatistics.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminPage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductDetailsView.vue')

      path: '/login',
      name: '/login',
      component: LoginViewVue,
    },
  ]
})

export default router