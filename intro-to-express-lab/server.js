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

// greet the user
server.get("/greetings/:name?", (req, res) => {
  const name = req.params.name || "Stranger!";
  const upperInitial = name[0].toUpperCase();
  const properCaseName = `${upperInitial}${name.slice(1)}`;

  res.send(`<h1>Hello there, ${properCaseName}</h1>`);
});
