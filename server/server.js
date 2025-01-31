import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductsModel from "./model/products.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/api/products", async (req, res) => {
  try {
    const userData = await ProductsModel.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});
