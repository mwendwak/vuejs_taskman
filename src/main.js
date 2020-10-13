import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let data = {
  msgGreet: 'Greetings',
  msgProgs: 'Churning'
};

new Vue({
  render: h => h(App),
  data: data,
}).$mount('#app')
