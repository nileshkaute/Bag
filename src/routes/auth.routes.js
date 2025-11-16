import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login", (req, res) => res.render("pages/login"));
router.get("/register", (req, res) => res.render("pages/register"));

router.post("/login", login);
router.post("/register", register);

export default router;
