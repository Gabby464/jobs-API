const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).send({ token });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("please provide email and pass bro");
    }
    const user = await User.findOne({ email });

    const isPassCorrect = await user.comparePassword(password);
    if (!isPassCorrect) {
        throw new Error("invalid creds bro");
    }
    if (!user) {
        throw new Error("ivalid creds bro");
    }
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ token });
};

module.exports = {
    register,
    login,
};
