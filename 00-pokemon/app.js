// list pokemons
// show pokemon evolutions
// show posible pokemon colors

const axios = require('axios')
const argv = require('./config/yargs').argv
    
console.log(argv.id)

axios.get(`https://pokeapi.co/api/v2/pokemon/${argv.id}/`)
  .then(function (response) {
    console.log(response.data.name);
  })
  .catch(function (error) {
    console.log("Error!", error);
  })
