import express from "express";
import { addToCart, getCart } from "../controllers/cart.controller.js";
import { verifyUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyUser, getCart);
router.post("/add", verifyUser, addToCart);

export default router;
