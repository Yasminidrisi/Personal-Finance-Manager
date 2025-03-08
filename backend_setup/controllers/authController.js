// const User = require("../models/user");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // exports.loginUser = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         if (!email || !password) {
// //             return res.status(400).json({ message: "Email and password are required" });
// //         }

// //         const user = await User.findOne({ email });

// //         if (!user) {
// //             return res.status(400).json({ message: "User not found" });
// //         }

// //         const isMatch = await bcrypt.compare(password, user.password);

// //         if (!isMatch) {
// //             return res.status(400).json({ message: "Invalid password" });
// //         }

// //         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// //         res.json({ message: "Login successful", token });
// //     } catch (error) {
// //         console.error("Error in loginUser:", error);
// //         res.status(500).json({ message: "Login error", error: error.message });
// //     }
// // };

// exports.loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ token, message: "Login successful" }); // ✅ Send token in response
//     } catch (error) {
//         res.status(500).json({ message: "Login error", error: error.message });
//     }
// };

// const User = require("../models/User"); // Ensure User model exists
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// exports.signupUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         // Check if the user already exists
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Save the new user
//         user = new User({ name, email, password: hashedPassword });
//         await user.save();

//         // Generate token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.status(201).json({ success: true, token, user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) return res.status(400).json({ message: "Invalid credentials" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ success: true, token, user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


const User = require("../models/User"); // ✅ Ensure correct path
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ success: false, message: "User already exists" });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the new user
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ success: true, message: "Signup successful!", token, user });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ success: true, token, user });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
