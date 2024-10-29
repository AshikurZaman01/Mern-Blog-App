const bcrypt = require("bcrypt");
const UserModel = require("../../Models/UserModel/userSchema");

const updateUserPassword = async (req, res) => {
    try {
        const { password } = req.body;

        // Check if password is provided
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Find the user by ID
        const user = await UserModel.findOne({ _id: req.user._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update user's password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = updateUserPassword;
