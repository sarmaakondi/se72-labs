// load environment variables from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const server = express();
const port = process.env.PORT || 3000;

// import models
const Quote = require("./models/quotes");

// middleware
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));

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

// get quote by _id | GET
server.get("/quotes/:quoteId", async (req, res) => {
  const quote = await Quote.findById(req.params.quoteId);
  res.render("quotes/show.ejs", { quote: quote });
});

// edit quote by _id | GET
server.get("/quotes/:quoteId/edit", async (req, res) => {
  const quote = await Quote.findById(req.params.quoteId);
  res.render("quotes/edit.ejs", { quote: quote });
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

// delete quote | DELETE
server.delete("/quotes/:quoteId", async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.quoteId);
    res.status(200).json({ message: "Quote deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting quote" });
  }
});

// server listening on specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
