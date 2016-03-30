var React = require('react');
var Forecast = require('../components/forecast');
var getFiveDayForecast = require('../utils/APIHelpers').getFiveDayForecast;
var PropTypes = React.PropTypes;

var ForecastContainer = React.createClass({
	contextTypes: {
		router: PropTypes.object.isRequired,
	},
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
	handleForecastClick: function (weather) {
		console.log(weather);
		this.context.router.push({
			pathname: '/detail/' + this.props.routeParams.city,
			state: weather,
		})
	},
	render: function() {
		return (
			this.state.isLoading
			? <h1>LOADING...</h1>
			: <Forecast
				onForecastClick={this.handleForecastClick}
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData}
			 />
		);
	}

});

module.exports = ForecastContainer;