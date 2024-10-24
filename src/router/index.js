import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('../views/BalanceHistoryView.vue')
    },
    {
      path: '/purchases',
      name: 'purchases',
      component: () => import('../views/PurchasesHistoryView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/tests',
      name: 'tests',
      component: () => import('../views/TestsView.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/TestQuestion.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/TestReportView.vue')
    },
  ]
})

export default router
