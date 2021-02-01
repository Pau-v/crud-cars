'use strict'

const express = require('express');
const nodemailer = require('nodemailer');

const emailController = {
    showFormToSendEmail: (req, res) => {
        res.render('templates/formTemplate');
    },

    postEmail: (req, res) => {
        const { name, email, phone, message } = req.body;

        contentHTML = `
            <h1>User Info</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>Username: ${email}</li>
                <li>Username: ${phone}</li>
            </ul>
            <p>${message}</p>
        `;
        console.log(contentHTML);
    }
};

module.exports = emailController;