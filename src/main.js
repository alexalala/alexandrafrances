import Vue from 'vue'
import App from './js/pages/Home.vue'
import Cloud from './js/components/Cloud.vue'
Vue.component('cloud', Cloud);

new Vue({
  el: '#app',
  render: h => h(App)
})
