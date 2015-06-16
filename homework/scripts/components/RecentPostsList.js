var React = require('react');

module.exports = React.createClass({
	render: function() {
		var noPosts = 'There are no blog posts yet';

		if(this.props.allPosts.length == 0) {
			return(
				<div>{noPosts}</div>
			);
		}
		else if(this.props.allPosts.length <= this.props.postsNum) {
			console.log(this.props.allPosts.models);
			var postsToPost = this.props.allPosts.map(function(blogPost) {
				return( 
					<div>
						<div key={blogPost.cid}>
							<strong>{blogPost.get('title')}</strong><br />
							{blogPost.get('post')}
						</div>
					</div>
				)
			}); 
			return ( <div>{postsToPost}</div> );
		} 
		else {
			
		}
	}
})