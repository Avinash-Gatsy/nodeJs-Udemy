const https = require('https');

const url = 'https://api.darksky.net/forecast/<YOUR_API_KEY>/13.09,80.27?units=si';

const request = https.request(url, (response) => {
    let data = '';

    // response can be a stream of data, so we need to listen to 'data' event to get the chunks
    response.on('data', (chunk) => {
        console.log(chunk); //chunk -> buffer
        // convert buffer to string
        data = data + chunk.toString();
    });

    response.on('end', ()=>{
        // parse data -> string to js obj
        const body = JSON.parse(data);
        console.log(body);
    });
});

//error handling
request.on('error', (error)=>{
    console.log(error);
});

request.end(); // will send the request