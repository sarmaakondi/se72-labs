// load environment variables from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = process.env.PORT || 3000;

// middleware
server.use(express.static("public"));

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

// routes
// root
server.get("/", (req, res) => {
  res.render("index.ejs");
});

// server listening on specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
