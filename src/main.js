import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

import capitalize from './filters/capitalize';

Vue.filter('capitalize', capitalize);

sync(store, router);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
