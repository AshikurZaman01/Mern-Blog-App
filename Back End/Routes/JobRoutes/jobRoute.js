const express = require('express');
const createJob = require('../../Controllers/JobControllers/createJob');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const isAuthorized = require('../../Middlewear/Authentication/isAuthorized');
const getAllJobs = require('../../Controllers/JobControllers/getAllJobs');
const router = express.Router();

router.post('/createJob', isAuthenticated, isAuthorized("employer"), createJob);

router.get('/getAllJobs', isAuthenticated, isAuthorized("job seeker"), getAllJobs);

module.exports = router;