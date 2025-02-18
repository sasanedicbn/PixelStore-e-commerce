import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  country: { type: Number, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
