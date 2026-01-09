const Product = require("../models/Product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      image,
      backgroundColor,
      titleColor,
      descriptionColor,
      priceColor,
      buttonColor,
      buttonTextColor,
    } = req.body;

    // Basic validation
    if (!title || !price || !description || !image) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields" });
    }

    const newProduct = new Product({
      title,
      price,
      description,
      image,
      backgroundColor,
      titleColor,
      descriptionColor,
      priceColor,
      buttonColor,
      buttonTextColor,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
