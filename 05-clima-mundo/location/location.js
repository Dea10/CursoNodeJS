const axios = require('axios')

const apiKey = '4c3a46a01c1d5ca1be88017ca3c91283';

const getLocation = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

    //console.log(response.data);
    const name = response.data.name;
    const lat = response.data.coord.lat;
    const lon = response.data.coord.lon;

    return {
        name,
        lon,
        lat
    }
}

module.exports = {
    getLocation
}