import express from "express";
import {
  getMe,
  getUserCart,
  getUserFavourites,
  loginUser,
  registerUser,
  sendMessageUser,
} from "../controllers/user/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.get("/me", protect, getMe); //treba ubaciti protect
routeUser.post("/contact", sendMessageUser);
routeUser.get("/favourites", protect, getUserFavourites);
routeUser.get("/cart", protect, getUserCart);

export default routeUser;
