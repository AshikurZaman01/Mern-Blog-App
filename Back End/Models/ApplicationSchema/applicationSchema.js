const mongoose = require('mongoose');
const validator = require('validator');

const applicationSchema = new mongoose.Schema({

    jobSeekersInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, 'Please enter a valid email']
        },

        phone: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        resume: {
            public_id: String,
            url: String,
        },

        coverLetter: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            required: true,
            enum: ['jobSeeker'],
        }
    },

    employerInfo: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

        role: {
            type: String,
            required: true,
            enum: ['employer'],
        }
    },

    jobInfo: {

        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        jobTitle: {
            type: String,
            required: true,
        }
    },

    deletedBy: {

        jobSeeker: {
            type: Boolean,
            default: false,
        },

        employer: {
            type: Boolean,
            default: false,
        }

    }


})

const ApplicationModel = mongoose.model('Application', applicationSchema);
module.exports = ApplicationModel;