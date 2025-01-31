import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductsModel from "./model/products.js";
import { upload } from "./controllers/productsControllers.js";
import cloudinary from "./utility/cloudinary.js";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.post("/upload-products", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required!" });
    }

    const { title, price, category } = req.body;
    console.log(req.body, "req body sa fronteneda");

    // Obećanje za Cloudinary upload
    const uploadImageToCloudinary = (buffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url);
            }
          }
        );
        uploadStream.end(buffer);
      });
    };

    // Čekamo da Cloudinary završi upload
    const imageUrl = await uploadImageToCloudinary(req.file.buffer);

    // Kreiranje proizvoda u bazi
    const product = new ProductsModel({
      title,
      price,
      category,
      imageUrl, // Cloudinary link slike
    });

    // Čuvanje u MongoDB
    await product.save();

    res
      .status(200)
      .json({ message: "Product uploaded successfully!", product });
  } catch (error) {
    console.error("Error uploading product:", error);
    res.status(500).json({ message: "Failed to upload product", error });
  }
});
