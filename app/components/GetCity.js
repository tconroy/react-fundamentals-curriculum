var React = require('react');
var PropTypes = React.PropTypes;
var styles = {};

function Button(props) {
	return (
		<button
			onClick={props.onSubmitCity}
			className="btn btn-lg btn-success"
			type="submit">
			{props.children}
		</button>
	);
}

function CityInput(props) {
	return (
		<input
			onChange={props.onUpdateCity}
			type="text"
			className="input input-lg"
			placeholder="St. George, Utah" />
	);
}

function GetCity (props) {
	return (
		<div>
			<CityInput
				onUpdateCity={props.onUpdateCity}
				city={props.city} />

			<Button
				onSubmitCity={props.onSubmitCity}>
				Get Weather
			</Button>
		</div>
	);
}

GetCity.PropTypes = {
	format: PropTypes.string.isRequired,
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired,
}

module.exports = GetCity;