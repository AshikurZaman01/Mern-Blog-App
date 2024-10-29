const jwt = require('jsonwebtoken');

const sendToken = (user, res, statusCode, message) => {
    // Generate JWT token
    let token;
    try {
        token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_TIME * 24 * 60 * 60 }  // JWT_EXPIRES_TIME in days
        );
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Token generation failed",
        });
    }

    // Set cookie options
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000  // 7 days in ms
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",  // Set secure flag in production
        sameSite: "Strict"  // Helps prevent CSRF attacks
    };

    // Send response
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        message,
        user,
        token
    });
};

module.exports = sendToken;