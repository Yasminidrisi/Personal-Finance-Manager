// const express = require("express");
// const { registerUser, loginUser } = require("../controllers/authController");
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);

// module.exports = router;

// const express = require("express");
// const { loginUser } = require("../controllers/authController"); // Ensure this path is correct

// const router = express.Router();

// router.post("/login", loginUser); // Ensure loginUser is correctly imported

// module.exports = router;



// const express = require("express");
// const { loginUser, signupUser } = require("../controllers/authController"); // Import signupUser

// const router = express.Router();

// router.post("/login", loginUser);
// router.post("/signup", signupUser); // ✅ Added signup route

// module.exports = router;

// const express = require("express");
// const { loginUser, signupUser } = require("../controllers/authController"); // Ensure both functions are imported

// const router = express.Router();

// router.post("/login", loginUser);
// router.post("/signup", signupUser); // ✅ Added signup route

// module.exports = router;

const express = require("express");
const { loginUser, signupUser } = require("../controllers/authController"); // ✅ Ensure both functions are imported

const router = express.Router();

router.post("/signup", signupUser); // ✅ Added signup route
router.post("/login", loginUser);

module.exports = router;

