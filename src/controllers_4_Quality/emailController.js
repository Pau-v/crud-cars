'use strict'

const nodemailer = require('nodemailer');

const Email = require('../models/emailModel');

const emailController = {
    
    showFormToSendEmail: (req, res) => {
        res.render('templates/formTemplate');
    },

    postEmail: async (req, res) => {
        const { name, email, phone, message } = req.body;
        /* const newEmail = new Email ({ name, email, phone, message });
        await newEmail.save(); */
        console.log(req.body)

        const contentHTML = `
            <h1>User Info</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
            </ul>
            <p>${message}</p>
        `;
        console.log(contentHTML);

        //Aqui configuamos donde vamos a enviar todo
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: '587',
            secure: false,
            auth: {
                user: 'asia77@ethereal.email',
                pass: 'dDVGuEczQWaWQzqDkW'
            }
        });

        //Aqui es donde decimos el que vamos a enviar
        const info = await transporter.sendMail({
            from: 'Receptor',
            to: 'simplyfiers.F5@gmail.com',
            subject: 'Formulario enviado desde Nodemiler',
            html: contentHTML
        });

        console.log('Message sent', info.messageId);
        res.redirect('/');
    }
};

module.exports = emailController;