const ApplicationModel = require("../../Models/ApplicationSchema/applicationSchema");

const jobSeekerGetAllApplication = async (req, res) => {

    try {
        const { _id } = req.user;

        const applications = await ApplicationModel.find({ 'jobSeekersInfo.id': _id })
            .populate('jobInfo.jobId');

        res.status(200).send({ success: true, message: "All Applications", applications });
    } catch (error) {
        res.status(500).send({ success: false, message: "Application fetch failed", error: error.message });
    }
};

module.exports = jobSeekerGetAllApplication;