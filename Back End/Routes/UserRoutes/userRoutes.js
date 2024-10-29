const express = require('express');
const registerUser = require('../../Controllers/UserControllers/registerUser');
const uploadResume = require('../../Middlewear/uploadResume/uploadResume');
const loginUser = require('../../Controllers/UserControllers/loginUser');
const userLogout = require('../../Controllers/UserControllers/userLogout');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const getuser = require('../../Controllers/UserControllers/getUser');
const router = express.Router();

router.post('/registerUser', uploadResume, registerUser);

router.post('/loginUser', loginUser);

router.get('/logoutUser', isAuthenticated, userLogout);

router.get('/getUser', isAuthenticated, getuser);

module.exports = router;