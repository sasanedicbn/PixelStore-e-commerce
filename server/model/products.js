import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: String,
  price: String,
});

export default ProductsModel = mongoose.model("products", productsSchema);
