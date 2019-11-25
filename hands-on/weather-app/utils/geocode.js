const request = require('request');

// geocoding
// address -> lat, lon
const geocode = (address, callback)=>{
    const encodedArr = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedArr}.json?access_token=<YOUR_ACCESS_TOKEN>&autocomplete=false&limit=1`;

    request({url, json: true}, (err, {body})=>{
        if(err){
            callback(`Error contacting geocoding service`, undefined);
        }else if(body.features.length < 1){
            callback(`Place not found. Try another search`, undefined);
        } else{
            callback(undefined, {coordinates: body.features[0].center, place: body.features[0].place_name});
        }
    });
};

module.exports = geocode;