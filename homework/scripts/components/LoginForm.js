var React = require('react');
var validator = require('validator');

module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<form onSubmit={this.userLogin}>
					<input type='text' ref='usernameInput' placeholder='Username' /> <br/>
					<input type='text' ref='emailInput' placeholder='Email' /><br/>
					<input type='password' ref='passwordInput' placeholder='Password' /><br/>
					<button type='submit' ref='loginForm'>Log In</button>
				</form>
				<div ref='error'></div>
			</div>
		)
	},
	userLogin: function(e) {
		e.preventDefault();

		var loginCombinations = [ {username: 'Ameli', email:'ameli@gmail.com', password: '1234'}, 
			{username: 'Marina', email: 'marina@gmail.com', password: '1234'},
			{username: 'test', email: 'test@gmail.com', password: 'test'} ];

		var emptyEmail = 'Enter an email address';
		var emptyPassword = 'Enter a password';
		var emailError = 'Enter a valid email address';
		var wrongCombination = 'That username / password combination doesn\'t exist';
		var username = this.refs.usernameInput.getDOMNode().value;
		var password = this.refs.passwordInput.getDOMNode().value;

		if(!validator.isLength(this.refs.emailInput.getDOMNode().value, 1)) {
			this.refs.error.getDOMNode().innerHTML = emptyEmail;
		}	
		else if(!validator.isEmail(this.refs.emailInput.getDOMNode().value)) {
			this.refs.error.getDOMNode().innerHTML = emailError;
		}
		else if(!validator.isLength(this.refs.passwordInput.getDOMNode().value, 1)) {
			this.refs.error.getDOMNode().innerHTML = emptyPassword;
		}
		else if(!checkUser(loginCombinations, username, password)) {
			this.refs.error.getDOMNode().innerHTML = wrongCombination;
		} 
		else {
			this.refs.error.getDOMNode().innerHTML = 'Success';
		}
		function checkUser (loginCombinations, username, password) {
			var valid = false;
			for(var i=0; i<loginCombinations.length; i++) {
				for(var prop in loginCombinations[i]) {
					if(username == loginCombinations[i].username 
						&& password == loginCombinations[i].password) {
						valid = true;
					}
				}
			}
			return	valid;
		}

	}
})