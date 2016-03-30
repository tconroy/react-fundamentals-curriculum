var React = require('react');
var Forecast = require('../components/forecast');
var getFiveDayForecast = require('../utils/APIHelpers').getFiveDayForecast;

var ForecastContainer = React.createClass({
	getInitialState: function () {
		return {
			isLoading: true,
			forecastData: {}
		}
	},
	componentDidMount: function () {
		this.handleForecastRequest(this.props.routeParams.city);
	},
	handleForecastRequest: function (city) {
		getFiveDayForecast(city)
			.then(function(resp) {
				this.setState({
					isLoading: false,
					forecastData: resp
				});
			}.bind(this)
		);
	},
	render: function() {
		return (
			this.state.isLoading
			? <h1>LOADING...</h1>
			: <Forecast
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
			 />
		);
	}

});

module.exports = ForecastContainer;