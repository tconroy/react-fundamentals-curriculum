var axios = require('axios');
var APIKEY = '1c54ffa1128a02f3b7ebeca416dc6245';

function fetchCurrentWeather(city) {
	var endpoint = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&type=accurate&APPID='+APIKEY;
	return axios.get(endpoint);
}
function fetchFiveDayForecast(city) {
	var endpoint = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&type=accurate&APPID='+APIKEY+'&cnt=5';
	return axios.get(endpoint);
}

var helpers = {
	getCurrentWeather: function (city) {
		axios.all([fetchCurrentWeather(city)])
			.then(function (response) {
				var data = response[0].data;
				var main = data.main;
				var weather = data.weather[0];
				var ret = {
					name: data.name,
					humidity: main.humidity,
					pressure: main.pressure,
					temp: main.temp,
					temp_max: main.temp_max,
					temp_min: main.temp_min,
					description: weather.description
				};
				return ret;
			})
			.catch(function (err) {
				console.error('error getCurrentWeather: ', err);
				return err;
			});
	},
	getFiveDayForecast: function (city) {
		return fetchFiveDayForecast(city)
			.then(function (response) {
				return response.data;
			})
			.catch(function (err) {
				console.error('error: getFiveDatForecast: ', err);
				return;
			});
	},
};

module.exports = helpers;