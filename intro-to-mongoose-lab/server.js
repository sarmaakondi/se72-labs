const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userPrompt = require("prompt-sync")();

// dotenv initialization
dotenv.config();

// main function
const connect = async () => {
  // connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // perform CRM operations per user request
  await performOperations();

  // disconnect from MongoDB
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
};

// handle CRM operations
const performOperations = async () => {
  console.log("Performing CRM operations!");
};

connect();
