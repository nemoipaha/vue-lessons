import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import post from './modules/post';
import comment from './modules/comment';

export const store = new Vuex.Store({
	strict: true,
	state: {
	  	
	},	
	modules: {
		post,	
		comment	
	}
});

export default store;