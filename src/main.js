import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  msgGreet: 'Greetings',
  msgProgs: 'Churning'
};

new Vue({
  render: h => h(App),
  router,
  data: data
}).$mount('#app')
