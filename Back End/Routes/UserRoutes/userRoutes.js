const express = require('express');
const registerUser = require('../../Controllers/UserControllers/registerUser');
const uploadResume = require('../../Middlewear/uploadResume/uploadResume');
const loginUser = require('../../Controllers/UserControllers/loginUser');
const router = express.Router();

router.post('/registerUser', uploadResume, registerUser);

router.post('/loginUser', loginUser);

module.exports = router;