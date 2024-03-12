const express = require('express')

const postUserController = require('./user/createUser/CreateUserController');
const getUserController = require('./user/GetUser/GetUserController');
const validatePerson = require('./user/createUser/Validation');

const router = express.Router();

router.post('/person',validatePerson, postUserController.createPerson);

router.get('/people', getUserController.getPerson);



module.exports = router 