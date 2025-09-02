import express from "express";
import {
  addProductToCart,
  getMe,
  getUserCart,
  getUserFavourites,
  loginUser,
  logoutUser,
  registerUser,
  sendMessageUser,
  updateProductInCart,
} from "../controllers/user/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.post("/logout", protect, logoutUser);
routeUser.post("/cart/add", protect, addProductToCart);
routeUser.get("/me", protect, getMe); //treba ubaciti protect
routeUser.post("/contact", sendMessageUser);
routeUser.get("/favourites", protect, getUserFavourites);
routeUser.get("/cart", protect, getUserCart);
routeUser.patch("/cart/:productId", protect, updateProductInCart);

export default routeUser;
