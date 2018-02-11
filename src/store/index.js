import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import post from './modules/post';

export const store = new Vuex.Store({
	strict: true,
	state: {
	  	
	},	
	modules: {
		post: post,		
	}
});

export default store;