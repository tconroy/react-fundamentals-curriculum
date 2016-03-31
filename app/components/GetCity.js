var React = require('react');
var PropTypes = React.PropTypes;
var styles = {};

function Button(props) {
	var styles = {};
	if (props.format === 'block') {
		styles.button = {
			display: 'block',
			margin: '0 auto',
			marginTop: '5px',
		}
	}
	return (
		<button
			style={styles.button}
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

	var styles = {
		container: {
			display: 'inline-block',
		},
		button: {}
	};
	if (props.format === 'inline') {
		styles.container = {
			float: 'right',
			padding: '5px',
		}
	}

	return (
		<div style={styles.container}>
			<CityInput
				onUpdateCity={props.onUpdateCity}
				city={props.city} />

			<Button
				format={props.format}
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