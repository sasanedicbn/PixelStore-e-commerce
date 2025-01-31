import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: String,
  price: String,
  category: String,
  image: String,
});

const ProductsModel = mongoose.model("Product", productsSchema);

export default ProductsModel;
