const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).send(user);
};

const login = async (req, res) => {
    res.send("login");
};

module.exports = {
    register,
    login,
};
