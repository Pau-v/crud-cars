'use strict'

const Question = require('../models/questionModel');

const questionController = {
    showAllQuestions: async (req, res) => {
        res.render('../views/templates');
    }
};

module.exports = questionController;