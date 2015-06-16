var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		text: '',
		userId: null,
		createdAt: null
	},
	validate: function(attr) {
		if(!attr.text) {
			return 'Please enter your comment.'
		}
		return false;
	}
});