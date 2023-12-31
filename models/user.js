const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email address"],
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email",
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        required: true,
        minlength: 6,
    },
});
user.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
user.method.getEmail = function () {
    return this.name;
};

user.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, name: this.name },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    );
};

user.methods.comparePassword = async function (receivedPassword) {
    const isMatch = await bcrypt.compare(receivedPassword, this.password);
    return isMatch;
};
module.exports = mongoose.model("User", user);
