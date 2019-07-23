require('dotenv').config();

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) {
	return console.log('must provide a location as first parameter');
}

geocode(location, (error, { coords, locationName }) => {
	if (error) {
		return console.log('Error:', error);
	}

	forecast(
		{
			...coords,
			locationName,
		},
		(error, forecastData) => {
			if (error) {
				return console.log('Error:', error);
			}
			console.log(forecastData);
		},
	);
});
