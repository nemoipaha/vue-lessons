import showBlogs from './components/showBlogs';
import addBlog from './components/addBlog';
import blogItem from './components/blogItem';

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