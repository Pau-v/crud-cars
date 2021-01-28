"use strict"

const { Schema, model} = require('mongoose');

const QuestionSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'necesitas intriducir un título']
    },
    descrption: {
        type: String,
        required: [true, 'necesitas introducir un texto']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Question', QuestionSchema);
