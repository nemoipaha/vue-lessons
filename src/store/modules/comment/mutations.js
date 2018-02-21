import Vue from 'vue';

const mutations = {
	ADD_COMMENT (state, newComment) {
		state.allComments.push(newComment);
	},

	SET_COMMENTS_FOR_POST (state, { postId, comments }) {
		Vue.set(state.allComments, postId, comments);
	}
};

export default mutations;