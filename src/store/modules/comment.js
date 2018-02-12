import axios from 'axios';
import Vue from 'vue';
import firebase from '../../services/firebase';

const state = {
	allComments: [],	
};

const mutations = {
	ADD_COMMENT (state, newComment) {

	},

	SHOW_COMMENTS_BY_POST(state, { postId, comments }) {
		Vue.set(state.allComments, postId, comments);
	}
};

const actions = {
	addComment({ commit }, commentBody) {
		return new Promise((resolve, reject) => {
			const URI = 'https://test-project-5bc2d.firebaseio.com/comments.json';

			axios
				.post(URI, commentBody)
				.then(response => {
					console.log(response.data);
			  		commit('ADD_COMMENT', response.data);		
			  		resolve();  		
				});
    	});
	},

	fetchComments({ commit }, postId) {
		var ref = firebase.database().ref("comments");

		ref.orderByChild("postId").equalTo(postId).on("value", function(snapshot) {
			commit('SHOW_COMMENTS_BY_POST', {
		  		postId: postId, 
		  		comments: snapshot.val()
		  	});
		});
	}
};

const getters = {
	commentsByPost: (state) => (id) => {
		return state.allComments[id];
	}
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
