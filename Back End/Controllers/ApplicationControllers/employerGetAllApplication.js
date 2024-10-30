const ApplicationModel = require("../../Models/ApplicationSchema/applicationSchema");

const employerGetAllApplication = async (req, res) => {
    try {
        const { _id } = req.user;

        const applications = await ApplicationModel.find({
            "employerInfo.id": _id,
            "deletedBy.employer": false
        });

        res.status(200).json({
            success: true,
            message: 'Applications fetched successfully',
            applications
        });

    } catch (error) {
        res.status(500).json({
            message: 'Application fetching failed',
            error: error.message
        });
    }
};

module.exports = employerGetAllApplication;