const express = require("express");
const router = express.Router();

const User = require("../models/user");

// TODO - Routes
router.get("/", (req, res) => {
  res.render("foods/index.ejs");
});

module.exports = router;
