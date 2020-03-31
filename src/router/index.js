import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/',
      name: 'Register',
      component: Register
    }

  ]
})

export default router

