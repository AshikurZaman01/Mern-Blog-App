const express = require('express');
const postApplication = require('../../Controllers/ApplicationControllers/postApplication');
const isAuthenticated = require('../../Middlewear/Authentication/auth');
const isAuthorized = require('../../Middlewear/Authentication/isAuthorized');
const employerGetAllApplication = require('../../Controllers/ApplicationControllers/employerGetAllApplication');
const jobSeekerGetAllApplication = require('../../Controllers/ApplicationControllers/jobSeekerGetAllApplication');
const deleteApplication = require('../../Controllers/ApplicationControllers/deleteApplication');
const uploadResume = require('../../Middlewear/uploadResume/uploadResume');
const router = express.Router();


router.post('/postApplication/:id', isAuthenticated, isAuthorized('jobSeeker'), uploadResume, postApplication);

router.get("/employerGetAllApplication", isAuthenticated, isAuthorized('employer'), employerGetAllApplication);

router.get("/jobSeekerGetAllApplication", isAuthenticated, isAuthorized('jobSeeker'), jobSeekerGetAllApplication);

router.delete("/deleteApplication/:id", isAuthenticated, deleteApplication);

module.exports = router;