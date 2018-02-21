import axios from 'axios';
import ResponseTransformer from '../../../services/ResponseTransformer';

const actions = {
	fetchPosts({ commit }) {
		axios
		  .get('https://test-project-5bc2d.firebaseio.com/posts.json')
		  .then(response => {
		  	const data = ResponseTransformer.transformResponse(response.data);
			commit('FETCH_POSTS', data);
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

export default actions;