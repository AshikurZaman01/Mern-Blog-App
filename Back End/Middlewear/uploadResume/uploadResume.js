const cloudinary = require('cloudinary').v2;

const uploadResume = async (req, res, next) => {
    try {
        if (req.files && req.files.resume) {
            const { resume } = req.files;
            if (resume.mimetype !== "application/pdf") {
                return res.status(400).json({ success: false, message: "Resume must be in PDF format" });
            }

            const cloudinaryResponse = await cloudinary.uploader.upload(resume.tempFilePath, {
                folder: "jobSeekersResumeFolder",
                use_filename: true,
                unique_filename: true
            });

            if (!cloudinaryResponse || cloudinaryResponse.error) {
                return res.status(500).json({ success: false, message: "Failed to upload resume" });
            }

            // Attach Cloudinary response to the request for use in the controller
            req.resumeUpload = {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url
            };
        }
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to upload resume" });
    }
};

module.exports = uploadResume;
