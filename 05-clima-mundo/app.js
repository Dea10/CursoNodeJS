const argv = require('./config/yargs').argv
const location = require('./location/location')
const weather = require('./weather/weather')

location.getLocation(argv.location)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))

weather.getWeather(-3.7, 40.42)
  .then(resp => console.log(resp))
  .catch(err => console.log(err))