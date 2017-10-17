import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './js/pages/Home.vue';
import Blog from './js/pages/Blog.vue';
import About from './js/pages/About.vue';
import Contact from './js/pages/Contact.vue';

import Navigation from './js/components/Navigation.vue';
import Footr from './js/components/Footr.vue';

import Cloud from './js/components/clouds/Cloud.vue';
import Cloud2 from './js/components/clouds/Cloud2.vue';
import Cloud3 from './js/components/clouds/Cloud3.vue';
import Building1 from './js/components/buildings/Building1.vue';
import Road from './js/components/misc/Road.vue';

Vue.component('navigation', Navigation);
Vue.component('footr', Footr);
Vue.component('cloud', Cloud);
Vue.component('cloud2', Cloud2);
Vue.component('cloud3', Cloud3);
Vue.component('building1', Building1);
Vue.component('road', Road);

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact }
  ]
});

new Vue({
  el: '#app',
  router: router
});
