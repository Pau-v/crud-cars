'use strict'

const Question = require('../models/questionModel');

const questionController = {
    showAllQuestions: async (req, res) => {
        res.send('aquí iran todas las preguntas');
    }
};

module.exports = questionController;