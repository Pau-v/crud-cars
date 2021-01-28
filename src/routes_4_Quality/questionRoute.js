"use strict";

const express = require('express');
const router = express.Router();

const questionController = require('../controllers_4_Quality/questionController');

// obtener preguntas GET

router.get('/faqs', questionController.showAllQuestions);

module.exports = router;