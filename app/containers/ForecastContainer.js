var React = require('react');
var Forecast = require('../components/forecast');

var ForecastContainer = React.createClass({

	render: function() {
		return (
			<Forecast />
		);
	}

});

module.exports = ForecastContainer;