const express = require('express');
const createJob = require('../../Controllers/JobControllers/createJob');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const isAuthorized = require('../../Middlewear/Authentication/isAuthorized');
const getAllJobs = require('../../Controllers/JobControllers/getAllJobs');
const getMyJob = require('../../Controllers/JobControllers/getMyJob');
const deleteJob = require('../../Controllers/JobControllers/deleteJob');
const getSingleJob = require('../../Controllers/JobControllers/getSingleJob');
const router = express.Router();

router.post('/createJob', isAuthenticated, isAuthorized("employer"), createJob);

router.get('/getAllJobs', isAuthenticated, isAuthorized("job seeker"), getAllJobs);

router.get('/getMyJob', isAuthenticated, isAuthorized("employer"), getMyJob);

router.get('/getSingleJob', isAuthenticated, isAuthorized("employer"), getSingleJob);

router.get('/delete/:id', isAuthenticated, isAuthorized("employer"), deleteJob);

module.exports = router;