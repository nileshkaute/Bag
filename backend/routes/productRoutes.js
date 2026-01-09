// Product routes
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Helper to handle async errors in routes if not using a wrapper
// For simplicity, we call controller functions directly as they handle their own errors

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
