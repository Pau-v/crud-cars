'use strict'

const Question = require('../models/questionModel');

const questionController = {
    showAllQuestions: (req, res) => {
        res.render('templates/mainTemplate');
    }
};

module.exports = questionController;