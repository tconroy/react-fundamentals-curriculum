var React = require('react');
var PropTypes = React.PropTypes;
var formatDate = require('../utils/Util').formatDate;
var convertTemp = require('../utils/Util').convertTemp;

function Top (props) {
	return (
		<div>
			<img style={{width: '300px', height: '300px'}} src={'./app/images/weather-icons/'+props.weather.weather[0].icon+'.svg'} />
			<h3>{formatDate(props.weather.dt)}</h3>
		</div>
	);
}

function Bottom (props) {
	return (
		<ul className="list-unstyled">
			<li>{props.city}</li>
		</ul>
	);
}

function Detail(props) {
	console.log(props);
	return (
		<div className="text-center">
			<Top weather={props.weather} />
			<Bottom city={props.city} weather={props.weather} />
		</div>
	);
}

module.exports = Detail;