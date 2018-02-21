const getters = {
	filteredPosts: state => {
		return state.posts.filter(post => {
			return post.title 
				? post.title.toUpperCase().match(state.search.toUpperCase()) 
				: false;
  		});
	},
};

export default getters;