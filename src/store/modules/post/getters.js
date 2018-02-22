const getters = {
	filteredPosts: state => searchStr => {
        return state.posts.filter(post => {
            return post.title.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
        });
	}
};

export default getters;