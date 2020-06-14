
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login.vue')
    }, {
      path: '/',
      name: 'index',
      component: () => import('./pages/index.vue')
    }, {
      path: '/course',
      name: 'course',
      component: () => import('./pages/course.vue')
    }, {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('./pages/userCenter.vue')
    }
  ]
})

export default router