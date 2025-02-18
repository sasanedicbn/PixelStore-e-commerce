import express from "express";
import { registerUser } from "../controllers/user/userController.js";

const routeUser = express.Router();

routeUser.post("/", registerUser);
routeUser.post("/login", registerUser);
routeUser.post("/me", registerUser);

export default userRoute;
