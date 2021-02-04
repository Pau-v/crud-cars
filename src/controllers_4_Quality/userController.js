'use strict'
const { request } = require('express');
const User = require('../models/userModel');

const usersController = {

    showLoginSignup: (request,response) => {
        response.send('nos devolvería un formulario de registro');
    },

    saveLogin: async (request,response) => {
        const {name,lastname,dni,email,password} = req.body;
        const newUser = new User ({name,lastname,dni,email,password});
        await newUser.save();
        response.send ('formulario enviado-hay que crear el parcial')
    }




};

module.exports = usersController;










