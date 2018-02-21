import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { post } from './modules/post/index';
import { comment } from './modules/comment/index';

export const store = new Vuex.Store({
	strict: true,
	
	state: {
		isLoading: false,
	},	
	
	modules: {
		post,	
		comment	
	},

	mutations: {
		LOAD_DATA (state, loading) {
			state.isLoading = loading;
		}
	},

	getters: {
		isLoading: state => state.isLoading
	}
});

export default store;