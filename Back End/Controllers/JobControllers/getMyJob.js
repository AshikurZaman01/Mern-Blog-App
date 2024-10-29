const JobModel = require("../../Models/JobModel/jobSchema");

const getMyJob = async (req, res) => {
    try {

        const myJob = await JobModel.find({ postedBy: req.user._id });

        if (!myJob) {
            return res.status(404).json({ message: "No Job Found" })
        }

        return res.status(200).json({ success: true, jobs: myJob })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}
module.exports = getMyJob;