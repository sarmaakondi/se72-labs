const express = require("express");
const server = express();
const port = 3000;

// server
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// routes
// root
server.get("/", (req, res) => {
  res.send("<h1>Intro to Express Lab</h1>");
});
