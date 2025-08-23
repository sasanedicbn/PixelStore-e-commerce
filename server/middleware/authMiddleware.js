import jwt from "jsonwebtoken";
import UserModel from "../model/user.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ msg: "Not authorized" });
    }
  } else {
    res.status(401).json({ msg: "Not valid token" });
  }
};
