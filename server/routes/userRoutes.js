import express from "express";
import { loginUser, registerUser } from "../controllers/user/userController.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", loginUser);
routeUser.post("/me", registerUser);

export default routeUser;
