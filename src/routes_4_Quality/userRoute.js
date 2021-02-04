'use strict'

const {Router} = require ('express');
const router = Router();

const usersController = require ('../controllers_4_Quality/userController');

router.get('/users/newUser', usersController.showLoginSignup);
router.post('/usersSave',usersController.saveLogin);
router.get('/users/form/:id', usersController.showFormToUpdate);
router.put('/users/update/:id', usersController.updateNewUser);
router.get('/users/signin', usersController.userLogin);
router.post('/users/login', usersController.loginVerification);
router.get('/users/logout', usersController.logout);



module.exports = router;