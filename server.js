require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Project Tracker API is running");
});

// server listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});