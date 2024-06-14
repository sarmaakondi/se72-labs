// load environment variables from .env file
require("dotenv").config();

const express = require("express");
const server = express();
const port = process.env.PORT;

// middleware
server.use(express.static("public"));

// routes
// root
server.get("/", (req, res) => {
  res.render("index.ejs");
});

// server listening on specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
