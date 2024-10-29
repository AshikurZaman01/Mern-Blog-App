const JobModel = require("../../Models/JobModel/jobSchema");

const createJob = async (req, res) => {

    try {

        const { title, jobType, jobDescription, location, companyName, qualifications, jobResponsibilities, jobFacilities, salary, hiringMultipleCandidates, companyWebsiteTitle, companyWebsiteUrl, jobNiche, newsLetterSent, jobPosedDate } = req.body;

        // Validate required fields
        if (!title || !jobType || !jobDescription || !location || !companyName ||
            !qualifications || !jobResponsibilities || !salary || !jobNiche) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate company website fields
        if ((companyWebsiteTitle && !companyWebsiteUrl) || (!companyWebsiteTitle && companyWebsiteUrl)) {
            return res.status(400).json({ message: 'Both company website title and url are required' });
        }


        const postedBy = req.user._id;

        const newJob = await JobModel.create({
            title,
            jobType,
            jobDescription,
            location,
            companyName,
            qualifications,
            jobResponsibilities,
            jobFacilities,
            salary,
            hiringMultipleCandidates,
            companyWebsite: {
                title: companyWebsiteTitle,
                url: companyWebsiteUrl
            },
            jobNiche,
            newsLetterSent,
            jobPosedDate,
            postedBy
        })

        // Send success response
        return res.status(201).json({ success: true, message: 'Job created successfully', job: newJob });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error creating job', error: error.message });
    }

}
module.exports = createJob;