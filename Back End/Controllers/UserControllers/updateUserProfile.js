const UserModel = require("../../Models/UserModel/userSchema");

const updateUserProfile = async (req, res) => {

    try {

        const user = req.user;
        const userId = user._id;

        const updateUser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });


        res.status(200).json({
            message: "User Profile Updated Successfully",
            data: updateUser
        })


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }

}
module.exports = updateUserProfile;