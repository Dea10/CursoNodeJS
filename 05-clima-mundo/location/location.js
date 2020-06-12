const axios = require('axios')

const apiKey = '4c3a46a01c1d5ca1be88017ca3c91283';

const getLocation = async (location) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

        const name = response.data.name;
        const lat = response.data.coord.lat;
        const lon = response.data.coord.lon;

        return {
            name,
            lon,
            lat
        }
    } catch (error) {
        throw new Error(`${location} not found`);
    }
}

module.exports = {
    getLocation
}