// const express = require("express");
// const { addTransaction, getTransactions } = require("../controllers/transactionController");
// const authMiddleware = require("../middleware/authMiddleware");
// const router = express.Router();

// router.post("/add", authMiddleware, addTransaction);
// router.get("/list", authMiddleware, getTransactions);

// module.exports = router;

const express = require("express");
const { addTransaction, getTransactions } = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", authMiddleware, addTransaction); // Requires JWT token
router.get("/", authMiddleware, getTransactions); // Requires JWT token

module.exports = router;
