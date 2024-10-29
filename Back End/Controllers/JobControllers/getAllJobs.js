const JobModel = require("../../Models/JobModel/jobSchema");

const getAllJobs = async (req, res) => {
    try {

        const { city, niche, searchKeywords } = req.query;
        const query = {};

        if (city) {
            query.location = city;
        }

        if (niche) {
            query.jobNiche = niche;
        }

        if (searchKeywords) {
            query.$or = [
                { title: { $regex: searchKeywords, $options: 'i' } },
                { jobDescription: { $regex: searchKeywords, $options: 'i' } },
                { companyName: { $regex: searchKeywords, $options: 'i' } },
            ]
        }

        const jobs = await JobModel.find(query).populate('postedBy', 'name email').sort({ createdAt: -1 });

        res.status(200).json({ success: true, jobs })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
module.exports = getAllJobs;