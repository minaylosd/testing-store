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
      component: () => import('../views/LaunchTestsView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
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
    {
      path: '/ux-ui-tests',
      name: 'UX/UI Tests',
      component: () => import('../views/UXUITestsView.vue')
    },
    {
      path: '/moderator',
      name: 'Moderator',
      component: () => import('../views/ModeratorView.vue')
    },
    {
      path: '/moderator/edit/:id',
      name: 'Edit test',
      component: () => import('../views/EditTest.vue'),
      props: true
    },
    {
      path: '/moderator/test/:id',
      name: 'Test Details',
      component: () => import('../views/ModeratorTestDetails.vue'),
      props: true
    },
    {
      path: '/audience',
      name: 'Test Details',
      component: () => import('../views/LaunchAudience.vue'),
    }
  ]
})

export default router
