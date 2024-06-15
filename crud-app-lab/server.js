// load environment variables from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const server = express();
const port = process.env.PORT || 3000;

// import models
const Quote = require("./models/quotes");

// middleware
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));

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

// get all quotes | GET
server.get("/quotes", async (req, res) => {
  const quotes = await Quote.find();
  res.render("quotes/index.ejs", { quotes: quotes });
});

// add new quote | GET
server.get("/quotes/new", (req, res) => {
  res.render("quotes/new.ejs");
});

// store the quote in MongoDB | POST
server.post("/quotes", async (req, res) => {
  let quote = req.body.quote;
  let author = req.body.author;
  let category = req.body.category;

  // validate quote body
  if (quote.trim() === "") {
    return;
  } else {
    quote = quote[0].toUpperCase() + quote.slice(1);
  }

  // validate author field and set default value
  if (author.trim() === "") {
    author = "anonymous";
  } else {
    author = author
      .toLowerCase()
      .trim()
      .split(" ")
      .map(
        (word) => word[0].toUpperCase() + (word.length > 1 ? word.slice(1) : "")
      )
      .join(" ");
  }

  // validate category field and set default value
  if (category.trim() === "") category = "uncategorized";

  // create qoute data object
  const quoteData = {
    quote: quote,
    author: author,
    category: category,
  };

  // add post to MongoDB
  await Quote.create(quoteData);
  res.redirect("/quotes");
});

// server listening on specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
