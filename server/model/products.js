import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  details: {
    type: {
      available: { type: String },
      description: { type: String },
    },
    default: {},
  },
  reviews: { type: Array, default: [] },
});

const ProductsModel = mongoose.model("Product", productsSchema);

export default ProductsModel;
