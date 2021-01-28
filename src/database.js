'use strict'

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/db-cars';

mongoose.connect(uri, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})

    .then( db => console.log(`db connected to ${uri}`))
    .catch( err => console.log(err))