const JobModel = require("../../Models/JobModel/jobSchema");

const getSingleJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await JobModel.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }

        return res.status(200).json({ success: true, message: "Job found", job: job });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

module.exports = getSingleJob;
