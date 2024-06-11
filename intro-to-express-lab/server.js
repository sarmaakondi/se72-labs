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

// i want that one!
server.get("/collectibles", (req, res) => {
  res.send(`<h1>Correct usage is: '/collectibles/index-0-or-greater'</h1>`);
});

server.get("/collectibles/:index", (req, res) => {
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];
  const index = req.params.index;

  if (isNaN(index)) {
    res.send("<h1>You must specify a number.</h1>");
  } else if (index < 0) {
    res.send("<h1>Index cannot be negative.</h1>");
  } else if (index > collectibles.length - 1) {
    res.send("<h1>This item is not yet in stock. Check back soon!</h1>");
  } else {
    const item = collectibles[index].name;
    const price = collectibles[index].price;
    res.send(
      `<h1>So, you want the ${item}? For ${price}, it can be yours!</h1>`
    );
  }
});

// filter shoes by query parameters
server.get("/shoes", (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
  ];
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const type = req.query.type;
  let filteredShoes = [...shoes];

  if (minPrice && minPrice >= 0 && !isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  } else if (typeof minPrice === "string") {
    res.send("<h1>Price must be specified as a positive number only.</h1>");
    return;
  }

  if (maxPrice && maxPrice >= 0 && !isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  } else if (typeof maxPrice === "string") {
    res.send("<h1>Price must be specified as a positive number only.</h1>");
    return;
  }

  if (type && Math.abs(type) >= 0) {
    res.send("<h1>Entered invalid value for type!</h1>");
    return;
  } else if (type) {
    filteredShoes = filteredShoes.filter(
      (shoe) => shoe.type.toLowerCase() === type.toLowerCase()
    );
  }

  res.send({ ...filteredShoes });
});
