const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userPrompt = require("prompt-sync")();
const Customer = require("./models/customer.js");

const title = "Welcome to the CRM";
const question = "What would you like to do?";
const operations = [
  {
    id: 1,
    description: "Create a customer",
    action: async () => {
      await createCustomer();
    },
  },
  {
    id: 2,
    description: "View all customers",
    action: async () => {
      await displayCustomers();
    },
  },
  {
    id: 3,
    description: "Update a customer",
    action: async () => {
      await updateCustomer();
    },
  },
  {
    id: 4,
    description: "Delete a customer",
    action: async () => {
      await deleteCustomer();
    },
  },
  {
    id: 5,
    description: "Quit",
    action: async () => {
      await quitApplication();
    },
  },
];

// dotenv initialization
dotenv.config();

// main function
const main = async () => {
  // connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }

  // perform CRM operations per user request
  try {
    await performOperations();
  } catch (error) {
    console.log("Error performing user requested operation: ", error);
  }

  // disconnect from MongoDB
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log("Error disconnecting from MongoDB: ", error);
  }
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

  // prompt for user response
  let response;
  do {
    response = userPrompt("Number of action to run: ");
    if (!/^\d+$/.test(response) || response <= 0 || response > 5) {
      console.error("Invalid input! options available are from 1 to 5 only.\n");
    }
  } while (isNaN(response) || response <= 0 || response > 5);
  return parseInt(response, 10);
};

// create new customer
const createCustomer = async () => {
  let customerName;
  let customerAge;

  // prompt for customer name
  do {
    customerName = userPrompt("Enter the customer's name: ");
  } while (customerName.trim() === "" || !isNaN(customerName));

  // prompt for customer age
  do {
    customerAge = userPrompt("Enter the customer's age (must be a number): ");
    if (!/^\d+$/.test(customerAge)) {
      console.error("Invalid age! please enter a positive whole number.");
    }
  } while (isNaN(customerAge) || customerAge <= 0);

  // create customer data
  const customerData = {
    name: customerName
      .toLowerCase()
      .trim()
      .split(" ")
      .map(
        (word) => word[0].toUpperCase() + (word.length > 1 ? word.slice(1) : "")
      )
      .join(" "),
    age: parseInt(customerAge, 10),
  };

  try {
    const customer = await Customer.create(customerData);
    console.log("Added customer details successfully!");
  } catch (error) {
    console.log("Error occurred: ", error);
  }
};

// view all customers
const displayCustomers = async () => {
  try {
    const customers = await Customer.find();
    console.log("Below is a list of customers:\n");
    for (const customer of customers) {
      console.log(
        `id: ${customer.id} -- Name: ${customer.name}, Age: ${customer.age}`
      );
    }
  } catch (error) {
    console.log("Error while fetching customers: ", error);
  }
};

// update customer details
const updateCustomer = async () => {
  try {
    const customers = await Customer.find();
    console.log("Below is a list of customers:\n");
    for (const customer of customers) {
      console.log(
        `id: ${customer.id} -- Name: ${customer.name}, Age: ${customer.age}`
      );
    }

    // validate user entered customer ID
    let customerId;
    do {
      customerId = userPrompt(
        "\nCopy and paste the id of the customer you would like to delete here: "
      );
    } while (customerId.trim() === "");

    const matchingCustomer = customers.find(
      (customer) => customer.id === customerId
    );

    // gather new details from user
    if (matchingCustomer) {
      let customerNewName = userPrompt("Enter the customer's new name: ");
      let customerNewAge = userPrompt(
        "Enter the customer's new age (must be a number): "
      );
      // validate user entered details
      if (isNaN(customerNewName) && customerNewName.trim() !== "") {
        customerNewName = customerNewName
          .toLowerCase()
          .trim()
          .split(" ")
          .map(
            (word) =>
              word[0].toUpperCase() + (word.length > 1 ? word.slice(1) : "")
          )
          .join(" ");
      } else {
        customerNewName = matchingCustomer.name;
      }
      if (
        !isNaN(customerNewAge) &&
        customerNewAge > 0 &&
        /^\d+$/.test(customerNewAge)
      ) {
        customerNewAge = parseInt(customerNewAge, 10);
      } else {
        customerNewAge = matchingCustomer.age;
      }
      // create customer data object with new details
      const customerData = {
        name: customerNewName,
        age: customerNewAge,
      };
      // update customer details
      await Customer.findByIdAndUpdate(customerId, customerData);
    } else {
      console.log(`Customer not found for the 'ID: ${customerId}', try again!`);
    }
  } catch (error) {
    console.log("Error while updating customer details: ", error);
  }
};

// delete customer
const deleteCustomer = async () => {
  try {
    const customers = await Customer.find();
    console.log("Below is a list of customers:\n");
    for (const customer of customers) {
      console.log(
        `id: ${customer.id} -- Name: ${customer.name}, Age: ${customer.age}`
      );
    }
    // ask user to enter the customer ID
    let customerId;
    do {
      customerId = userPrompt(
        "\nCopy and paste the id of the customer you would like to delete here: "
      );
    } while (customerId.trim() === "");
    // perform customer delete operation
    const matchingCustomer = customers.find(
      (customer) => customer.id === customerId
    );
    if (matchingCustomer) {
      await Customer.findByIdAndDelete(customerId);
      console.log("Customer deleted successfully!");
    } else {
      console.log(`Customer not found for the 'ID: ${customerId}', try again!`);
    }
  } catch (error) {
    console.log("Error while deleting customer: ", error);
  }
};

// quit
const quitApplication = async () => {
  console.log("Exiting application now...\nHave a great day!");
};

// handle CRM operations
const performOperations = async () => {
  const actionNumber = displayWelcomeMessage(title, question, operations);
  const operation = operations.find((op) => op.id === actionNumber);
  if (operation) {
    await operation.action();
  }
};

main();
