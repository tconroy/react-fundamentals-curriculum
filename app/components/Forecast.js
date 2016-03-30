var React = require('react');
var PropTypes = React.PropTypes;
var formatDate = require('../utils/Util').formatDate;

function Title (props) {
	return (<h1 className="text-center">{props.text}</h1>);
}

function Bubble (props) {
	var weather = props.forecast.weather[0];
	var style = {
		display: 'inline-block',
		textAlign: 'center',
		margin: '35px',
	};
	var imgStyle = {
		width: '150px',
		height: '150px',
	};
	return (
		<li style={style}
			onClick={props.onForecastClick}>
			<img
				style={imgStyle}
				src={'./app/images/weather-icons/'+weather.icon+'.svg'}/>
			<DateTime dt={props.forecast.dt} />
			<h5>{weather.description}</h5>
		</li>
	);
}

function DateTime (props) {
	var d = formatDate(props.dt);
	return (<h1>{d}</h1>);
}

function Forecast(props) {
	return (
		<div style={{margin: '0 auto', width: '90%'}}>
			<Title text={props.city} />
			<ul className="list-unstyled text-center">
				{props.forecastData.list.map(function(item, index) {
					return (<Bubble onForecastClick={props.onForecastClick.bind(null, item)} key={index} forecast={item}/>);
				})}
			</ul>
		</div>
	);
}

Forecast.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	forecastData: PropTypes.object.isRequired,
	city: PropTypes.string.isRequired,
};

module.exports = Forecast;