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
routeUser.get("/me", getMe); //treba ubaciti protect
routeUser.post("/contact", sendMessageUser);

export default routeUser;
