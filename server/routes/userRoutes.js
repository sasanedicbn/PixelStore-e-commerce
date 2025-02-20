import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controllers/user/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.get("/me", protect, getMe);

export default routeUser;
