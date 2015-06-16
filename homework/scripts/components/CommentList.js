var React = require('react');
var CommentModel = require('../models/CommentModels');
var CommentCollection = require('../collections/CommentCollection');
var CommentBoard = new CommentCollection();

module.exports = React.createClass({
	render: function() {
			var commentElements = this.props.allComments.map(function(commentModel) {
				return ( <div key={commentModel.cid}> {commentModel.get('text')} </div> )
			});
			return (<div> {commentElements} </div>);

		// return React.createElement(
		// 	'div',
		// 	{},
		// 	commentElements
		// )
	}
})
