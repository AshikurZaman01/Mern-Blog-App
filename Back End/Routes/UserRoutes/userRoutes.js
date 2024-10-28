const express = require('express');
const registerUser = require('../../Controllers/UserControllers/registerUser');
const uploadResume = require('../../Middlewear/uploadResume/uploadResume');
const router = express.Router();

router.post('/registerUser', uploadResume, registerUser);

module.exports = router;