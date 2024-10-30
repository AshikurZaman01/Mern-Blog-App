const ApplicationModel = require("../../Models/ApplicationSchema/applicationSchema");

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const applications = await ApplicationModel.findById(id);

        if (!applications) {
            return res.status(404).json({ message: "Application not found" });
        }

        const { role } = req.user;
        switch (role) {
            case "employer":
                applications.deletedBy.employer = true;
                break;
            case "jobSeeker":
                applications.deletedBy.jobSeeker = true;
                break;
            default:
                return res.status(401).json({ message: "Unauthorized action" });
        }

        await applications.save();

        // Delete the application if both parties have marked it as deleted
        if (applications.deletedBy.employer && applications.deletedBy.jobSeeker) {
            await ApplicationModel.findByIdAndDelete(id);
        }

        return res.status(200).json({ success: true, message: "Application deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


module.exports = deleteApplication;