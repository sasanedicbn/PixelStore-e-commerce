import mongoose from "mongoose";
import ProductsModel from "./products";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: ProductsModel }],
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
