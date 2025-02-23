import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
  sendMessageUser,
} from "../controllers/user/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.get("/me", protect, getMe);
routeUser.post("/contact", protect, sendMessageUser);

export default routeUser;
