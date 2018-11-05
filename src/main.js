import axios from 'axios';
import VueAxios from 'vue-axios';
import Home from '@/components/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  { path: '/', component: Home },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
