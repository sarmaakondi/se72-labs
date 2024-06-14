// load environment variables from .env file
require("dotenv").config();

const express = require("express");
const server = express();
const port = process.env.PORT;

// server listening on specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
