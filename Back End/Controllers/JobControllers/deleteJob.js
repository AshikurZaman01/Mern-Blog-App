const JobModel = require("../../Models/JobModel/jobSchema");

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await JobModel.findById(id); // Use findById instead of find

        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }

        await JobModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Job Deleted Successfully" });
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Deleting job failed.", error: error.message });
    }
};

module.exports = deleteJob;
