var Backbone = require('backbone');
Backbone.$ = require('jquery');

var CommentModel = require('../models/CommentModels.js');

module.exports = Backbone.Collection.extend({
	model: CommentModel
})