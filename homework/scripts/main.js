var React = require('react');

var CommentForm = require('./components/CommentForm');

var CommentList = require('./components/CommentList');
var CommentCollection = require('./collections/CommentCollection');
var comments = new CommentCollection([{text:'orange', createdAt: new Date()}, {text:'hello', createdAt: new Date()}]);

var BlogPostsCollection = require('./collections/BlogPostsCollection');
var BlogForm = require('./components/BlogPost');
var categories = ['', 'home', 'travel', 'food', 'books', 'music', 'life'];

var RecentPosts = require('./components/RecentPostsList');
var number = 2;
var posts = new BlogPostsCollection([
	{
		title: 'Music',
		post: 'Love classic music'
	},
	{	
		title: 'Next country to visit',
		post: 'India'
	}
]);

var LoginForm = require('./components/LoginForm');

React.render(
	<div id='main'>
		<div>
			<CommentForm />
		</div>
		<div>
			<CommentList allComments={comments} />
		</div>
		<div>
			<BlogForm allCategories={categories} />
		</div>
		<div>
			<RecentPosts allPosts={posts} postsNum={number} />
		</div>
		<div id='form'>
			<LoginForm />
		</div>
	</div>,
	document.getElementById('container')
);