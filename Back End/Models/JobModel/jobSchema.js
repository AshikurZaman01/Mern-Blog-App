const { default: mongoose } = require("mongoose");

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    jobType: {
        type: String,
        required: true,
        enum: ['Full Time', 'Part Time', 'Internship'],
    },

    jobDescription: {
        type: String,
    },

    location: {
        type: String,
        required: true
    },

    companyName: {
        type: String,
        required: true
    },

    qualifications: {
        type: String,
        required: true
    },

    jobResponsibilities: {
        type: String,
        required: true
    },

    jobFacilities: {
        type: String,
    },

    salary: {
        type: Number,
        required: true,
        min: 0
    },


    hiringMultipleCandidates: {
        type: String,
        default: 'no',
        enum: ['yes', 'no'],
    },

    companyWebsite: {
        title: String,
        url: String
    },

    jobNiche: {
        type: String,
        required: true
    },

    newsLetterSent: {
        type: Boolean,
        default: false
    },

    jobPosedDate: {
        type: Date,
        default: Date.now
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})
const JobModel = mongoose.model('Job', jobSchema);
module.exports = JobModel;
