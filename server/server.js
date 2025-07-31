import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductsModel from "./model/products.js";
import { upload } from "./controllers/productsControllers.js";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";

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
app.use("/api/users", userRoute);
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

    const { title, price, category, details } = req.body;

    const imageUrl = req.file.path;
    console.log("details", details);

    const detailsObj = details ? JSON.parse(details) : {};

    const product = new ProductsModel({
      title,
      price,
      category,
      imageUrl,
      details: {
        available: detailsObj?.available,
        description: detailsObj?.description,
      },
    });

    await product.save();

    res
      .status(200)
      .json({ message: "Product uploaded successfully!", product });
  } catch (error) {
    console.error("Error uploading product:", error);
    res.status(500).json({ message: "Failed to upload product", error });
  }
});
app.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    let query = {};
    if (category) {
      query.category = category;
    }
    console.log(query, "quey");

    const products = await ProductsModel.find(query).limit(5);

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category!" });
    }

    res.status(200).json({ message: "Products found!", products });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductsModel.findById(id);

    if (!product) {
      return res.status(404).json({ msg: "We can not find this product" });
    }
    res.status(200).json({ msg: "Product found!", product });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    let query = {};
    if (category) {
      query.category = category;
    }
    console.log(query, "quey");

    const products = await ProductsModel.find(query);

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found!" });
    }

    res.status(200).json({ message: "Products found!", products });
  } catch (error) {
    res.status(500).json({ message: "Failed to find products" });
  }
});
