import Vue from "vue";
import Router from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home, 
    },
    {
      path: '/about',
      component: About, 
    },
    {
      path: '*',
      component: NotFound, 
    }
    
  ]

})