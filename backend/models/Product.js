const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Can be URL or file path
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff", // Default white
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
