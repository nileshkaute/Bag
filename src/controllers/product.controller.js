import Product from "../models/Product.js";

export const renderAddProduct = (req, res) => {
  try {
    res.render("pages/add-product");
  } catch (error) {
    res.status(500).send("Unable to render add product page");
  }
};

export const createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newProduct = new Product({
      title,
      price,
      description,
      image
    });

    await newProduct.save();
    res.redirect("/products");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("pages/product-list", { products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.render("pages/product-details", { product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};