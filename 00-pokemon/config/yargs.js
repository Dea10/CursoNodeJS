const argv = require('yargs').options({
    id: {
        alias: 'i',
        desc: 'Id Pokémon',
        demand: true
    }
}).argv;

module.exports = {
    argv
}