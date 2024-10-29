const express = require('express');
const registerUser = require('../../Controllers/UserControllers/registerUser');
const uploadResume = require('../../Middlewear/uploadResume/uploadResume');
const loginUser = require('../../Controllers/UserControllers/loginUser');
const userLogout = require('../../Controllers/UserControllers/userLogout');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const getuser = require('../../Controllers/UserControllers/getUser');
const updateUserProfile = require('../../Controllers/UserControllers/updateUserProfile');
const updateUserPassword = require('../../Controllers/UserControllers/updateUserPassword');
const router = express.Router();

router.post('/registerUser', uploadResume, registerUser);

router.post('/loginUser', loginUser);

router.get('/logoutUser', isAuthenticated, userLogout);

router.get('/getUser', isAuthenticated, getuser);

router.put('/updateUserProfile', isAuthenticated, uploadResume, updateUserProfile);

router.put('/updateUserPassword', isAuthenticated, updateUserPassword)

module.exports = router;