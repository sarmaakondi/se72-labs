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

// rolling the dice
// edge case
server.get("/roll", (req, res) => {
  res.send(`<h1>Correct usage is: '/roll/number-greater-than-0'</h1>`);
});

// positive case
server.get("/roll/:maxValue", (req, res) => {
  const maxValue = parseInt(req.params.maxValue, 10);
  if (isNaN(maxValue)) {
    res.send("<h1>You must specify a number.</h1>");
  } else if (maxValue === 0) {
    res.send("<h1>Dice cannot be rolled 0 times. Try again!</h1>");
  } else if (maxValue < 0) {
    res.send("<h1>Number cannot be negative.</h1>");
  } else {
    const diceValue = Math.floor(Math.random() * maxValue) + 1;
    res.send(`<h1>You rolled a ${diceValue}</h1>`);
  }
});
