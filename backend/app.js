// Main application entry point
const express = require("express");
const cors = require("cors"); // Assume cors might be needed, adding just in case or standard middleware
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json()); // Body parser for JSON
app.use(express.urlencoded({ extended: true })); // Body parser for URL-encoded
app.use(cors()); // Enable CORS for frontend communication

// Routes
app.use("/api/products", productRoutes);

module.exports = app;
