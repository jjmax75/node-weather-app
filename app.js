require('dotenv').config();

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Dublin', (error, data) => {
	console.log('Error:', error);
	console.log('Data:', data);
});

forecast({ long: -6.26583, lat: 53.3425 }, (error, data) => {
	console.log('Error:', error);
	console.log('Data:', data);
});
