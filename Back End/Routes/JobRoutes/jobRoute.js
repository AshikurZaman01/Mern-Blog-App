const express = require('express');
const createJob = require('../../Controllers/JobControllers/createJob');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const router = express.Router();

router.post('/createJob', isAuthenticated, createJob);

module.exports = router;