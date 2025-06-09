const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create or update user after Firebase signup/login
router.post("/save", async (req, res) => {
  const { uid, email, role } = req.body;

  try {
    let user = await User.findOne({ uid });
    if (user) {
      user.email = email;
      user.role = role || user.role;
      await user.save();
    } else {
      user = new User({ uid, email, role: role || "user" });
      await user.save();
    }
    res.status(200).json({ message: "User saved", user });
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

module.exports = router;
