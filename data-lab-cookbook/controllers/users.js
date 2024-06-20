const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Routes
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("users/index.ejs", { users: users });
});

router.get("/:id/show", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/show.ejs", {
    username: user.username,
    pantry: user.pantry,
  });
});

module.exports = router;
