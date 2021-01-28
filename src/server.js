'use strict'

const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const morgan = require('morgan');

// SETTINGS
const app = express();
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// RUTAS
app.use('/api', require('../src/routes_4_Quality/questionRoute'));

//SETTINGS HBS
app.engine('hbs', exphbs({
    defaultLayout: 'main', 
    partialsDir: __dirname + '/views/partials/', 
    layoutsDir: __dirname + '/views/layouts/',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

//STATICS FILES
app.use(express.static(__dirname + '/public'));



module.exports = app;
