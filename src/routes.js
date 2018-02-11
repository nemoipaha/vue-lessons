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
		path: '/add-blog',
		component: addBlog
	},
	{
		path: '/blogs/:id',
		component: blogItem
	}		
];