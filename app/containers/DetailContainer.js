var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({

	render: function() {
		console.log(this.props);
		return (
			<Detail
				city={this.props.routeParams.city}
				weather={this.props.location.state.weather} />
		);
	}

});

module.exports = DetailContainer;