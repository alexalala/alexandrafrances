import Vue from 'vue'
import App from './js/pages/Home.vue'
import Navigation from './js/components/Navigation.vue'
import MainContent from './js/components/MainContent.vue'
import Cloud from './js/components/clouds/Cloud.vue'
import Cloud2 from './js/components/clouds/Cloud2.vue'
import Cloud3 from './js/components/clouds/Cloud3.vue'

Vue.component('cloud', Cloud);
Vue.component('cloud2', Cloud2);
Vue.component('cloud3', Cloud3);
Vue.component('navigation', Navigation);
Vue.component('main-content', MainContent);

new Vue({
  el: '#app',
  render: h => h(App)
})
