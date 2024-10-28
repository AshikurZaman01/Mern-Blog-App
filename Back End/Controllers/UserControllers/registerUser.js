const bcrypt = require('bcrypt');
const UserModel = require('../../Models/UserModel/userSchema');
const cloudinary = require('cloudinary').v2;

const registerUser = async (req, res) => {
    try {
        const { name, email, password, phone, address, coveLetter, role, firstNich, secondNich, thirdNich } = req.body;

        // Validation for required fields (same as before)

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

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

        // Send successful response
        res.status(201).json({ success: true, message: "User registered successfully", data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = registerUser;
