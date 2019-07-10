require('dotenv').config();

const request = require('request');

const apiKey = process.env.DARK_SKY_API_KEY;
const locationServiceApiKey = process.env.MAPBOX_API_KEY;

const locationServiceUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${locationServiceApiKey}`;

const weatherServiceUrl = `https://api.darksky.net/forecast/${apiKey}/53.162222,-7.191111?units=si`;

request({ url: weatherServiceUrl, json: true }, (error, response) => {
	const description = response.body.daily.data[0].summary;
	const { temperature, precipProbability } = response.body.currently;
	console.log(
		`${description} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`,
	);
});

request({ url: locationServiceUrl, json: true }, (error, response) => {
	const coords = {
		long: response.body.features[0].center[0],
		lat: response.body.features[0].center[1],
	};
	const locationName = response.body.features[0].place_name;
	console.log(`${locationName} is at ${coords.lat}, ${coords.long}.`);
});
