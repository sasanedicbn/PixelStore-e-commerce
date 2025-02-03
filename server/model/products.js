import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: String,
  price: String,
  category: String,
  imageUrl: String,
  details: {
    available: String,
    description: String,
  },
});

const ProductsModel = mongoose.model("Product", productsSchema);

export default ProductsModel;
