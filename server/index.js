const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
var cookieSession = require('cookie-session')
var config = require('./config')
const person = require('../src/JSON/person')
let AboutMe = require("../src/JSON/AboutMe.json")

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(pino);
app.use(express.static(
    path.join(__dirname, 'public')
))

app.use(cookieSession({
    name: 'session',
    keys: config.keySession,
    maxAge: config.maxAgeSession
}))

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);


/////////////////////////////////////////////////
const login = "Sebastian";
const password = "Jadczak";

app.get('/login', (req, res) => {
    res.json({
        login,
        password
    })
})


//////////////////////////////////////////////

app.get('/myprofil1', (req, res) => {
    res.json({
        name: person.name,
        surname: person.surname,
        adress: person.adress,
        title: AboutMe.title,
        content: AboutMe.content
    })

})