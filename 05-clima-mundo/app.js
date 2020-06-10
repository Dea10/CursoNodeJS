// node app -d San Jose Costarica
// node app -d "Madrid España"

const axios = require('axios')
const argv = require('./config/yargs').argv
    
console.log(argv.direccion)

// axios.get('https://pokeapi.co/api/v2/pokemon/12/')
//   .then(function (response) {
//     console.log(response.data.name);
//   })
//   .catch(function (error) {
//     console.log("Error!", error);
//   })

axios({
    "method":"GET",
    "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
    "x-rapidapi-key":"cce2c117cdmshd0ea8ccb5a87518p1fecb5jsnc766e0ac3f49",
    "useQueryString":true
    },"params":{
    "location":"Madrid"
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })