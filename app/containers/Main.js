var React = require('react');
var Header = require('../components/Header');

var Main = React.createClass({

	render: function() {
		return (
			<div>
				<Header title="Clever Title" />
				{this.props.children}
			</div>
		);
	}

});

module.exports = Main;