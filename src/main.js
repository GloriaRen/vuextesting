import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$store = store

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === '/login') {
    next()
  } else {
    next({
      path: '/login'
    })
  }
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
