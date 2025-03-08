const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    // Get token from request headers
    const token = req.header("Authorization");

    // If no token is found, return error
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Remove "Bearer " prefix if present
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Store user info in request
        next(); // Continue to next middleware
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
