const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userPrompt = require("prompt-sync")();
const Customer = require("./models/customer.js");

const title = "Welcome to the CRM";
const question = "What would you like to do?";
const operations = [
  { id: 1, description: "Create a customer" },
  { id: 2, description: "View all customers" },
  { id: 3, description: "Update a customer" },
  { id: 4, description: "Delete a customer" },
  { id: 5, description: "Quit" },
];

// dotenv initialization
dotenv.config();

// main function
const connect = async () => {
  // connect to MongoDB
  // await mongoose.connect(process.env.MONGODB_URI);

  // perform CRM operations per user request
  await performOperations();

  // disconnect from MongoDB
  // await mongoose.disconnect();
};

// CRM functions
// display welcome message
const displayWelcomeMessage = (title, question, operations) => {
  console.log(title, "\n");
  console.log(question, "\n");
  operations.forEach((operation) => {
    console.log(`${operation.id}. ${operation.description}`);
  });
  console.log();
  const response = userPrompt("Number of action to run: ");
  return response;
};

// handle CRM operations
const performOperations = async () => {
  const actionNumber = await displayWelcomeMessage(title, question, operations);
  console.log(actionNumber);
};

connect();
