'use strict'

const Question = require('../models/questionModel');

const questionController = {
    showAllQuestions: (req, res) => {
        res.render('templates/faqsTemplate');
    }
};

module.exports = questionController;