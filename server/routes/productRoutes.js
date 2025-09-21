import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addReview } from "../controllers/user/productController.js";

const routeProduct = express.Router();

routeProduct.post("/:productId/reviews", protect, addReview);

export default routeProduct;
