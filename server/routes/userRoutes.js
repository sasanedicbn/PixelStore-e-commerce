import express from "express";
import { registerUser } from "../controllers/user/userController.js";

const routeUser = express.Router();

const userRoute = routeUser.post("/", registerUser);

export default userRoute;
