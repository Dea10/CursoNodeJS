const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}