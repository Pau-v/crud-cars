'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

//Initialitings
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

//SETTINGS HBS
app.engine('.hbs', exphbs({
    defaultLayout: 'main', 
    partialsDir: __dirname + '/views/partials/',
    partialsDir: __dirname + '/views/templates/',
    partialsDir: __dirname + '/views/partials/atoms',
    partialsDir: __dirname + '/views/partials/molecules',
    partialsDir: __dirname + '/views/partials/organisms',    
    layoutsDir: __dirname + '/views/layouts/',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// RUTAS
app.use('/api', require('./routes_4_Quality/questionRoute'));

//STATICS FILES
app.use(express.static(__dirname + '/public'));

module.exports = app;
