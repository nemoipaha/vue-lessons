const getters = {
	commentsByPost: (state) => (id) => {
		return state.allComments[id] ? state.allComments[id] : [];
	}
};

export default getters;