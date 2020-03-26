import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    }

  ]})
  router.beforeEach((to, from, next) => {

    return next({
        path: '/login',
        query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
      })
  
  

})

export default router