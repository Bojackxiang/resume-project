import Vue from "vue";
import Router from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import SignIn from './pages/SignIn.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        keepAlive: true,
      }
    },
    {
      path: '/about',
      component: About,
      keepAlive: false,
    },
    {
      path: '/sign-in',
      component: SignIn,
      keepAlive: false,
    },
    {
      path: '*',
      component: NotFound,
    }

  ]

})