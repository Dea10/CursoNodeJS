const axios = require('axios')

const apiKey = '4c3a46a01c1d5ca1be88017ca3c91283';

const getWeather = async (lon, lat) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ apiKey }`);

    console.log(response.data.weather);
    // const name = response.data.name;
    // const lat = response.data.coord.lat;
    // const lon = response.data.coord.lon;

    // return {
    //     name,
    //     lon,
    //     lat
    // }
}

module.exports = {
    getWeather
}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}