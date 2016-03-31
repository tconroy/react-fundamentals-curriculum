var React = require('react');
var PropTypes = React.PropTypes;
var Styles = require('../styles/Header');
var GetCityContainer = require('../containers/GetCityContainer');

var Header = React.createClass({
	propTypes: {
		title: PropTypes.string.isRequired,
	},
	render: function() {
		return (
			<div style={Styles.container}>
				<h1 style={Styles.header}>{this.props.title}</h1>
				<GetCityContainer format="inline" />
			</div>
		);
	}

});

module.exports = Header;