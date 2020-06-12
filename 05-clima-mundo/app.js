const argv = require('./config/yargs').argv
const location = require('./location/location')
const weather = require('./weather/weather')

const getInfo = async (input) => {
  try {
    const coords = await location.getLocation(input);
    const res = await weather.getWeather(coords.lon, coords.lat)
    return `${input} weather: ${res[0].description}`;
  } catch (error) {
    return `${input} not found`;
  }
}

getInfo(argv.location)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))