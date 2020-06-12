const axios = require('axios')

const apiKey = '4c3a46a01c1d5ca1be88017ca3c91283';

const getWeather = async (lon, lat) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        return response.data.weather;
    } catch (error) {
        throw new Error(`lon: ${lon}, lat ${lat}) coord not found`);
    }
}

module.exports = {
    getWeather
}

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}