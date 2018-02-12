import axios from 'axios';
import Vue from 'vue';

const state = {
	blogs: [],
	
	postItem: {
		title: '',
		content: '',
		author: '',
		categories: []
	},
	
	authors: [
		'The Net Ninja',
		'The Angular Avenger',
		'The Vue Vindicator'
	],

	search: ''
};

const mutations = {
	ADD_POST (state, post) {
		state.blogs.push(post);
	},

	SHOW_POST (state, post) {
		state.postItem = post;
	},

	FETCH_POSTS (state, posts) {
		state.blogs = posts;
	},

	SEARCH_BY_TITLE (state, searchStr) {
		state.search = searchStr;
	}
};

const actions = {
	fetchPosts({ commit }) {
		axios
		  .get('https://test-project-5bc2d.firebaseio.com/posts.json')
		  .then(response => {
		  	const data = response.data;
		    let newBlogs = [];
		    
		    // map id values
		    for (let key in data) {
		      data[key].id = key;
		      newBlogs.push(data[key]);
		    }

		    commit('FETCH_POSTS', newBlogs);
	  	});		
	},

	fetchPost({ commit }, postId) {
		axios
			.get('https://test-project-5bc2d.firebaseio.com/posts/' + postId + '.json')
			.then(function(response) {
			  	commit('SHOW_POST', response.data);
			});
	},

	addPost({ commit }, post) {
		return new Promise((resolve, reject) => {
			axios
				.post('https://test-project-5bc2d.firebaseio.com/posts.json', post)
				.then(response => {
			  		commit('ADD_POST', response.data);		
			  		resolve();  		
				});
    	});
	},
};

const getters = {
	filteredPosts: state => {
		return state.blogs.filter(blog => {
	        return blog.title ? blog.title.toUpperCase().match(state.search.toUpperCase()) : false;
  		});
	},
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
