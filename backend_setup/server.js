// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const transactionRoutes = require("./routes/transactionRoutes");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);
// app.use("/api/transactions", transactionRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const transactionRoutes = require("./routes/transactionRoutes");

// dotenv.config(); // ✅ Load environment variables first
// connectDB(); // ✅ Connect to DB

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);
// app.use("/api/transactions", transactionRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db"); // Import MongoDB connection

// dotenv.config();
// connectDB(); // Connect MongoDB

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/finmanagerapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected ✅"))
// .catch((err) => console.log("MongoDB Connection Error ❌", err));


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ Import DB connection
const authRoutes = require("./routes/authRoutes"); // ✅ Import routes

dotenv.config();
connectDB(); // ✅ Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes); // ✅ Add this line to register auth routes

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


