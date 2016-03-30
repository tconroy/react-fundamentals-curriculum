var React = require('react');
var Styles = require('../styles/Home');
var GetCityContainer = require('../containers/GetCityContainer');

var Home = React.createClass({

	render: function() {
		return (
			<div style={Styles.container}>
				<h1 style={Styles.header}>Enter a City and a State</h1>
				<GetCityContainer />
			</div>
		);
	}

});

module.exports = Home;