var React = require('react');
var PropTypes = React.PropTypes;
var formatDate = require('../utils/Util').formatDate;
var convertTemp = require('../utils/Util').convertTemp;

function Top (props) {
	return (
		<div>
			<h1>{props.city}</h1>
			<img style={{width: '300px', height: '300px'}}
				src={'./app/images/weather-icons/'+props.icon+'.svg'} />
			<h3>{formatDate(props.dt)}</h3>
		</div>
	);
}

function Bottom (props) {
	var styles = {
		ul: {
			display: 'inline-block'
		},
		li: {
			display: 'block',
			fontSize: '1.5em',
			cursor: 'default',
		}
	}
	return (
		<ul className="list-unstyled" style={styles.ul}>
			<li style={styles.li}>{props.weather.weather[0].description}</li>
			<li style={styles.li}>Min: {Math.round(convertTemp(props.weather.temp.min))} degrees</li>
			<li style={styles.li}>Max: {Math.round(convertTemp(props.weather.temp.max))} degrees</li>
			<li style={styles.li}>Humidity: {props.weather.humidity}</li>
		</ul>
	);
}

function Detail(props) {
	return (
		<div className="text-center">
			<Top
				city={props.city}
				icon={props.weather.weather[0].icon}
				dt={props.weather.dt} />
			<Bottom weather={props.weather} />
		</div>
	);
}

module.exports = Detail;