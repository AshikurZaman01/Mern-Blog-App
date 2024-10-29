const jwt = require('jsonwebtoken');
const UserModel = require('../../Models/UserModel/userSchema');

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Not Authorized. Please Login" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findById(decoded.userId);

        if (!req.user) {
            return res.status(401).json({ message: "Not Authorized. Please Login" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Not Authorized. Please Login" });
    }
};

module.exports = isAuthenticated;
