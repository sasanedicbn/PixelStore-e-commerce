import jwt from "jsonwebtoken";
import UserModel from "../model/user.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // samo cookie

    if (!token) {
      return res.status(401).json({ msg: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    req.user = await UserModel.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ msg: "User not found" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Not authorized, token failed" });
  }
};
