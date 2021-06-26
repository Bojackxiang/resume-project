import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import routers from './router'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css'
import store from './store/index'

Vue.use(store)
Vue.use(ElementUI);

Vue.config.productionTip = false

// 在这边可以全聚德使用 filters 
Vue.filter('uppercase', function (textValue) {
  return textValue.toString().toUpperCase()
})

new Vue({
  store,
  router: routers,
  render: h => h(App),
}).$mount('#app')
