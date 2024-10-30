const ApplicationModel = require("../../Models/ApplicationSchema/applicationSchema");
const JobModel = require("../../Models/JobModel/jobSchema");

const postApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, address, coverLetter } = req.body;

        // Check required fields
        if (!name || !email || !phone || !address || !coverLetter) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // Find job details
        const jobDetails = await JobModel.findById(id);
        if (!jobDetails) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Construct jobSeekerInfo
        const jobSeekerInfo = {
            id: req.user._id,
            name,
            email,
            phone,
            address,
            coverLetter,
            role: 'jobSeeker',
            resume: req.resumeUpload || {}
        };

        // Construct employerInfo and jobInfo
        const employerInfo = {
            id: jobDetails.postedBy,
            role: 'employer'
        };

        const jobInfo = {
            jobId: jobDetails._id,
            jobTitle: jobDetails.title
        };

        // Create a new application document
        const application = new ApplicationModel({
            jobSeekersInfo: jobSeekerInfo,
            employerInfo,
            jobInfo
        });

        // Save application to the database
        await application.save();

        res.status(201).json({ message: "Application submitted successfully", application });
    } catch (error) {
        res.status(500).json({ message: "Post Application Failed", error: error.message });
    }
};

module.exports = postApplication;
