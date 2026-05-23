const router = require("express").Router();

const User = require("../models/User");
const { signToken } = require("../utils/auth");

// register user
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    const token = signToken(user);

    res.status(201).json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const correctPassword = await user.comparePassword(req.body.password);

    if (!correctPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = signToken(user);

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;