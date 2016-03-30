var React = require('react');
var PropTypes = React.PropTypes;

function Title (props) {
	return (<h1>{props.text}</h1>);
}

function Bubble (props) {
	var weather = props.forecast.weather[0];
	console.log(props);
	return (
		<li style={{display: 'inline-block'}}>
			<p>ICON = {weather.icon}</p>
			<p>DESC = {weather.description}</p>
		</li>
	);
}

function Forecast(props) {
	return (
		<div>
			<Title text={props.city} />
			<ul className="list-unstyled">
				{props.forecastData.list.map(function(item, index) {
					return (<Bubble key={index} forecast={item}/>);
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