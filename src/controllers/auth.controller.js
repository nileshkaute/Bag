import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/jwt.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.send("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashed,
    });

    res.redirect("/auth/login");
  } catch (error) {
    res.send("Error: " + error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.send("No user found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Incorrect password");

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
    });

    res.redirect("/");
  } catch (error) {
    res.send("Error: " + error.message);
  }
};