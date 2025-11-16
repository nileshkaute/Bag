import express from "express";
import { 
  createProduct, 
  getProducts, 
  getProductById,
  renderAddProduct
} from "../controllers/product.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Show add product form
router.get("/new", renderAddProduct);

// Get single product
router.get("/:id", getProductById);

// Create new product (protected route)
router.post("/", upload.single("image"), createProduct);

export default router;