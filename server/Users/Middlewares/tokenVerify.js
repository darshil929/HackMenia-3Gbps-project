const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ error: "Authorization token is missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = authenticateUser;
