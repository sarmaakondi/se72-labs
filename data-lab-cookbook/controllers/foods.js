const express = require("express");
const router = express.Router();

const User = require("../models/user");

// TODO - Routes
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    res.render("foods/index.ejs", { pantry: user.pantry });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/new", (req, res) => {
  res.render("foods/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    user.pantry.push(req.body);
    await user.save();
    res.redirect(`/users/${user._id}/foods`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
