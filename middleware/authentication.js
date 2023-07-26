const user = require("../models/user");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require('../errors')

const auth = (req, res, next) => {
    //check header
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer")) {
        throw new UnauthenticatedError("Invalid Authentication");
    }
    const token = header.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //attach to the job routes;
        req.user = { userId: payload.userId };
    } catch (error) {
        throw new UnauthenticatedError("Invalid Authentication");
    }
    next();
};

module.exports = auth;
