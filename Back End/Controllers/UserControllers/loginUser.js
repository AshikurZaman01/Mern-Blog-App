const bcrypt = require('bcrypt');
const UserModel = require('../../Models/UserModel/userSchema');
const sendToken = require('../../Utils/sendToken');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please enter all details" });
        }

        // Find user by email, include password for validation
        const user = await UserModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Verify user has a password in the database
        if (!user.password) {
            return res.status(500).json({ success: false, message: "User password is missing in the database." });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        // Send token on successful login

        sendToken(user, res, 200, 'Login successful');

    } catch (error) {
        res.status(500).json({ success: false, message: "Login failed", error: error.message });
    }
};

module.exports = loginUser;
