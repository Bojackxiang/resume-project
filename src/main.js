import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import routers from './router'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router: routers, 
  render: h => h(App),
}).$mount('#app')
