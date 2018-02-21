import Firebase from '../../../services/Firebase';
import axios from 'axios';
import ResponseTransformer from '../../../services/ResponseTransformer';

const actions = {
	addComment({ commit }, commentBody) {
		return new Promise((resolve, reject) => {
			const URI = 'https://test-project-5bc2d.firebaseio.com/comments.json';

			axios
				.post(URI, commentBody)
				.then(response => {
					commit('ADD_COMMENT', response.data);		
			  		resolve();  		
				});
    	});
	},

	fetchComments({ commit }, postId) {
		return new Promise((resolve, reject) => {
			const ref = Firebase.database().ref("comments");

			ref.orderByChild("postId").equalTo(postId).on("value", function(snapshot) {
				commit('SET_COMMENTS_FOR_POST', {
					  postId: postId, 
					  comments: ResponseTransformer.transformResponse(snapshot.val())
				});
				
				resolve();
			});
		});
	}
};

export default actions;