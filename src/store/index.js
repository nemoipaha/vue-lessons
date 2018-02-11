import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import blogs from './modules/blogs'

export const store = new Vuex.Store({
	strict: true,
	state: {
	  	
	},	
	modules: {
		blogs: blogs
	}
});

export default store;