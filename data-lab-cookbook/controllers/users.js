const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Routes
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("users/index.ejs", { users: users });
});

module.exports = router;
