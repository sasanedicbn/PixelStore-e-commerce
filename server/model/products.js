import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

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
  reviews: { type: [reviewSchema], default: [] },
});

const ProductsModel = mongoose.model("Product", productsSchema);

export default ProductsModel;
