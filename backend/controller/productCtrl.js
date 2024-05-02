// Import the product model
const Product = require("../models/productModel");

// Import the Express asynchronous handler
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
// Define an asynchronous function to create a product
const createProduct = asyncHandler(async (req, res) => {
    try {
        // Check if req.body exists and contains the expected properties
        if (!req.body || !req.body.title || !req.body.description || !req.body.price) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Generate slug from title if title exists
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }

        // Create a new product using the request body data
        const newProduct = await Product.create(req.body);

        // Send a JSON response containing the newly created product
        res.status(201).json(newProduct);
    } catch (error) {
        // Check if the error is a validation error
        if (error.name === "ValidationError") {
            // Extract error messages from validation error
            const errorMessages = Object.values(error.errors).map(error => error.message);
            return res.status(400).json({ message: "Validation Error", errors: errorMessages });
        }
        
        // Log the error for debugging purposes
        console.error("Error creating product:", error);

        // Send a 500 Internal Server Error response with the error message
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extracting the product ID from request parameters
    try {
        const foundProduct = await Product.findById(id); // Finding the product by its ID
        if (!foundProduct) {
            // If product with the given ID is not found, send a 404 Not Found response
            return res.status(404).json({ message: "Product not found" });
        }
        // If the product is found, send it as a JSON response
        res.json(foundProduct);
    } catch (error) {
        // If an error occurs, handle it by sending a 500 Internal Server Error response
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // Retrieve all products from the database
        const allProducts = await Product.find();

        // If there are no products found, send a 404 Not Found response
        if (allProducts.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        // If products are found, send them as a JSON response
        res.json(allProducts);
    } catch (error) {
        // If an error occurs, handle it by sending a 500 Internal Server Error response
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extracting the product ID from request parameters
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        
        // Find the product by its ID and update it with the data from req.body
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        
        // Check if the product with the given ID exists
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        // Send the updated product as a JSON response
        res.json(updatedProduct);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error updating product:", error);
        
        // Send a 500 Internal Server Error response with the error message
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params; // Extracting the product ID from request parameters
    try {
        // Find the product by its ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        // Check if the product with the given ID exists
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        // Send the deleted product as a JSON response
        res.json(deletedProduct);
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error deleting product:", error);
        
        // Send a 500 Internal Server Error response with the error message
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Export the createProduct function to be used in other files
module.exports = { createProduct,getaProduct,getAllProducts,updateProduct,deleteProduct};
