const bcrypt = require('bcrypt');
const UserModel = require('../../Models/UserModel/userSchema');
const sendToken = require('../../Utils/sendToken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone, address, coveLetter, role, firstNich, secondNich, thirdNich } = req.body;

        // Validation for required fields (same as before)
        if (!name || !email || !password || !phone || !address || !coveLetter || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (role === "jobSeeker" && (!firstNich || !secondNich || !thirdNich)) {
            return res.status(400).json({ message: 'All fields are preferred for jobSeeker' });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            return res.status(500).json({ message: 'Password hashing failed' });
        }

        // Create the user object
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            coveLetter,
            role,
            niches: { firstNich, secondNich, thirdNich }
        });

        // If resume was uploaded, attach it to the user model
        if (req.resumeUpload) {
            newUser.resume = req.resumeUpload;
        }

        // Save the user to the database
        await newUser.save();

        // Send token and response
        sendToken(newUser, res, 201, "User registered successfully");

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};

module.exports = registerUser;
