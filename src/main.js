import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

// filters
import snippet from './filters/snippet';
import toUppercase from './filters/toUppercase';

// directives
import theme from './directives/theme';

Vue.use(VueResource);

Vue.directive('theme', theme);
Vue.filter('snippet', snippet);
Vue.filter('to-uppercase', toUppercase);

sync(store, router)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
