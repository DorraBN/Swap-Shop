// Import the Express module
const express = require('express');
// Create an instance of the Express application
const app = express();

// Import the dotenv module to load environment variables from the .env file
const dotenv = require('dotenv').config();

// Middleware to parse JSON-encoded request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Define the port on which the server will listen for requests
// The PORT environment variable will be used if defined, otherwise port 4000 will be used by default
const port = process.env.PORT || 4000;

// Import the product router
const productRouter = require("./routes/productRoute");

// Import the database connection module
const dbConnect = require('./config/dbConnect');
// Import the morgan middleware for logging
const morgan = require("morgan");

// Connect to the database
dbConnect();

// Use morgan middleware for logging
app.use(morgan('dev'));

// Define the product router to handle requests related to products
app.use("/api/product", productRouter);

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    // Log a message to the console indicating that the server has started successfully and on which port it's listening
    console.log(`Le serveur écoute sur le port ${port}`);
});
