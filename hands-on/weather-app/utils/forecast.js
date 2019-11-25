const request = require('request');

//lat, lon -> weather
const forecast = ({ longitude, latitude }, callback) => {
    const url = `https://api.darksky.net/forecast/<YOUR_API_KEY>/${latitude},${longitude}?units=si`;
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback(`Error conecting to weather service`, undefined);
        } else if (body.error) {
            callback(`Unable to find location`, undefined);
        } else {
            callback(undefined, body.currently);
        }
    });

};

module.exports = forecast;