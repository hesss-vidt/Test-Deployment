const jwt = require("jsonwebtoken");
const config = require("../config/jwt");
exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(403).json({ message: "Token tidak tersedia" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token tidak valid" });
        }
        req.user = decoded;
        next();
    });
};