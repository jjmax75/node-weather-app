const request = require('request');

const apiKey = process.env.DARK_SKY_API_KEY;

const forecast = (coords, callback) => {
	const url = `https://api.darksky.net/forecast/${apiKey}/${coords.lat},${coords.long}?units=si`;
	console.log(url);
	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service.');
		} else if (response.body.error) {
			callback(`{response.body.code} - ${response.body.error}`);
		} else {
			const description = response.body.daily.data[0].summary;
			const { temperature, precipProbability } = response.body.currently;
			callback(
				undefined,
				`${description} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`,
			);
		}
	});
};

module.exports = forecast;
