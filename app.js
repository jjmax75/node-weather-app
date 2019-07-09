require('dotenv').config();

const request = require('request');

const apiKey = process.env.DARK_SKY_API_KEY;

const url = `https://api.darksky.net/forecast/${apiKey}/53.162222,-7.191111?units=si`;

request({ url, json: true }, (error, response) => {
	const description = response.body.daily.data[0].summary;
	const { temperature, precipProbability } = response.body.currently;
	console.log(
		`${description} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`,
	);
});
