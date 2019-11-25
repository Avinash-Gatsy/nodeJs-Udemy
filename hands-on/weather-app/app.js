const geocode = require(`./utils/geocode`);
const forecast = require(`./utils/forecast`);

const address = process.argv[2];
if (address) {
    geocode(address, (err, {coordinates, place}) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(`Coordinates are : longitude "${coordinates[0]}", latitude "${coordinates[1]}" for ${place}.`);
            forecast({ longitude: coordinates[0], latitude: coordinates[1] }, (err, {temperature}) => {
                return err ? console.log(err) : console.log(`Temperature is ${temperature}`);
            });
        }
    });
} else {
    console.log(`Try again by providing an address using CLI`);
}