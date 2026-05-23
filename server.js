require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Project Tracker API is running");
});

// server listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});