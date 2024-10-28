const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [30, "Name must be at most 30 characters long"]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    },

    password: {
        type: String,
        required: true,
        minLength: [5, "Password must be at least 5 characters long"],
        maxLength: [30, "Password must be at most 30 characters long"],
        select: false   // This will not show the password in the response
    },

    phone: {
        type: Number,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    resume: {
        public_id: String,  // This is the id of the image stored in cloudinary
        url: String // This is the url of the image stored in cloudinary
    },

    niches: {
        firstNich: String,
        secondNich: String,
        thirdNich: String
    },

    coveLetter: {
        type: String,
    },

    role: {
        type: String,
        required: true,
        enum: ["job seeker", "employer"],
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;