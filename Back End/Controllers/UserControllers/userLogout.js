const userLogout = async (req, res) => {
    try {
        // Clear the token cookie
        res.cookie('token', '', {
            expires: new Date(Date.now() - 1000), // Expire the cookie immediately
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        });

        res.status(200).json({ success: true, message: 'Logout Successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = userLogout;
