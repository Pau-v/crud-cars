'use strict'

const { response } = require('express');
const Question = require('../models/questionModel');

const questionController = {
    
    showAllQuestions: async(req, res) => {
        const question = await Question.find().lean();
        res.render('templates/faqsTemplate', { question })
        /* res.render('templates/faqsTemplate'); */
    }
};

module.exports = questionController;