import { express } from "express";
import { protect } from "../middleware/authMiddleware";

const routeProduct = express.Router();

routeProduct.post(`/products/${productId}/reviews`, protect);

export default routeProduct;
