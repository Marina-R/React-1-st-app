var React = require('react');
var CommentModel = require('../models/CommentModels');
var CommentCollection = require('../collections/CommentCollection');
var CommentBoard = new CommentCollection ();

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.commentSubmitted}>
					<input ref='userComment' type='text' placeholder='Your comment goes here...' />
					<button type='submit'>Submit comment</button>
				</form>
			</div>
		);
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		var comment = new CommentModel({
			text: this.refs.userComment.getDOMNode().value,
			createdAt: new Date()
		})
		if(!comment.isValid()) {
			console.log(comment.validationError);
		} else {
			console.log(comment);
		}
	}
});