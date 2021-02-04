'use strict'

const {Router} = require ('express');
const router = Router();

const usersController = require ('../controllers_4_Quality/userController');

router.get('/users/login', usersController.showLoginSignup);
router.post('/usersSave',usersController.saveLogin);


module.exports = router;