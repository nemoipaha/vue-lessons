import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0, x: 0 }),
  routes: Routes
});