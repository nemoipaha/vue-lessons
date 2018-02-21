const mutations = {
	ADD_POST (state, post) {
		state.posts.push(post);
	},

	SHOW_POST (state, post) {
		state.postItem = post;
	},

	FETCH_POSTS (state, posts) {
		state.posts = posts;
	},

	SEARCH_BY_TITLE (state, searchStr) {
		state.search = searchStr;
	}
};

export default mutations;