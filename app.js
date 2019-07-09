require('dotenv').config();

const request = require('request');

const apiKey = process.env.DARK_SKY_API_KEY;

const url = `https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`;

request({ url }, (error, response) => {
	const data = JSON.parse(response.body);
	console.log(data.currently);
});
