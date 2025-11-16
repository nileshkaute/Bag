import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/auth/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.redirect("/auth/login");
  }
};
