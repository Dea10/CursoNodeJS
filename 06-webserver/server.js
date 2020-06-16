const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Daniel'
    });
})

app.get('/about', function (req, res) {
    res.render('about');
})

// app.get('/data', function (req, res) {
//     res.send('Hello data!')
// })

app.listen(3000, () => {
    console.log("Listen on port 3000");
})