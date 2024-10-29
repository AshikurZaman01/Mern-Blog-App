const bcrypt = require('bcrypt');
const UserModel = require('../../Models/UserModel/userSchema');
const sendToken = require('../../Utils/sendToken');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please enter all details" });
        }

        const user = await UserModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (!user.password) {
            return res.status(500).json({ success: false, message: "User password is missing in the database." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        sendToken(user, res, 200, 'Login successful'); // No need for headers check here

    } catch (error) {
        return res.status(500).json({ success: false, message: "Login failed", error: error.message });
    }
};



module.exports = loginUser;
