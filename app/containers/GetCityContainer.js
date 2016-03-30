var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getCurrentWeather = require('../utils/APIHelpers').getCurrentWeather;
var getFiveDayForecast = require('../utils/APIHelpers').getFiveDayForecast;

var GetCityContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	getInitialState: function() {
		return {
			city: '',
		};
	},
	handleSubmitCity: function () {
		if (!this.state.city.length) {
			return;
		}

		// getCurrentWeather(this.state.city);
		// getFiveDayForecast(this.state.city);
		this.context.router.push('/forecast/'+this.state.city);

	},
	handleUpdateCity: function (e) {
		this.setState({
			city: e.target.value,
		});
	},
	render: function() {
		return (
			<GetCity
				format="block"
				city={this.state.city}
				onSubmitCity={this.handleSubmitCity}
				onUpdateCity={this.handleUpdateCity} />
		);
	}

});

module.exports = GetCityContainer;