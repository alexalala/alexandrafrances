import Vue from 'vue'
import App from './js/pages/Home.vue'
import Navigation from './js/components/Navigation.vue'
import MainContent from './js/components/MainContent.vue'
import Footr from './js/components/Footr.vue'
import Cloud from './js/components/clouds/Cloud.vue'
import Cloud2 from './js/components/clouds/Cloud2.vue'
import Cloud3 from './js/components/clouds/Cloud3.vue'
import Building1 from './js/components/buildings/Building1.vue'

Vue.component('navigation', Navigation);
Vue.component('main-content', MainContent);
Vue.component('footr', Footr);
Vue.component('cloud', Cloud);
Vue.component('cloud2', Cloud2);
Vue.component('cloud3', Cloud3);
Vue.component('building1', Building1);

new Vue({
  el: '#app',
  render: h => h(App)
})
