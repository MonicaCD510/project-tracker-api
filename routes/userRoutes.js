require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Project Tracker API is running");
});

// server listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});