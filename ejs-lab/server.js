const express = require("express");
const server = express();
const port = 3000;

// routes
// root
server.get("/", (req, res) => {
  res.send("Hello There!");
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
