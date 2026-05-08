const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// test
app.get("/", (req, res) => {
  res.send("🚀 News Portal API is running");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});