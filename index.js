

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dotenv = require('dotenv')
app.use(bodyParser.json());
app.use(express.json())
const postRoute = require('./routes/users');

//app.use('/users', postRoute);

//Routes

// How do we start listening to the server?
//app.get('/', (req, res) => {
    //res.send('We are on home');
//});
// Start listening
// connect to db

app.listen(3000)