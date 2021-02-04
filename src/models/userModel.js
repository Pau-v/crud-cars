'use strict'

const { Mongoose } = require("mongoose")

const {Schema,model} = require ("mongoose");

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true
    },

    email: {
        type: email,
        required: true
    },

    password: {
        type: password,
        required: true
    }
},
    {
        timestamps: true

})

module.exports = model('User', UserSchema);