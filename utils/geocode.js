const request = require('request');

const locationServiceApiKey = process.env.MAPBOX_API_KEY;

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address,
	)}.json?access_token=${locationServiceApiKey}`;
	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to location services');
		} else if (response.body.features.length === 0) {
			callback('unable to find location, please try again.');
		} else {
			const coords = {
				long: response.body.features[0].center[0],
				lat: response.body.features[0].center[1],
			};
			const locationName = response.body.features[0].place_name;
			callback(undefined, { locationName, coords });
		}
	});
};

module.exports = geocode;
