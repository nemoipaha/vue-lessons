// import showBlogs from './components/showBlogs';
// import addBlog from './components/addBlog';
// import blogItem from './components/blogItem';

const showBlogs = () => import(/* webpackChunkName: "home" */ './components/showBlogs.vue');
const addBlog = () => import(/* webpackChunkName: "addBlog" */ './components/addBlog.vue');
const blogItem = () => import(/* webpackChunkName: "blogItem" */ './components/blogItem.vue');

export default [
	{
		path: '/',
		component: showBlogs
	},
	{
		path: '/posts',
		component: showBlogs
	},
	{
		path: '/add-post',
		component: addBlog
	},
	{
		path: '/posts/:id',
		component: blogItem
	}		
];