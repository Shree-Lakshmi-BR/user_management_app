const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

//! Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  await user.save();
  res.send("User registered");
});

//! Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user._id }, "jwtSecret", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

//! Get all users
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//! Delete user
router.delete("/:id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
