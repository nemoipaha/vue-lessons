const PostList = () => import(/* webpackChunkName: "posts" */ './components/posts/PostList.vue');
const AddPost = () => import(/* webpackChunkName: "addPost" */ './components/posts/AddPost.vue');
const PostItemPage = () => import(
	/* webpackChunkName: "postItem" */ './components/posts/PostItemPage.vue'
);

export default [
	{
		path: '/',
		redirect: '/posts'
	},
	{
		path: '/posts',
		component: PostList,
	},
	{
		path: '/add-post',
		component: AddPost
	},		
	{
		path: '/posts/:id',
		component: PostItemPage
	}	
];