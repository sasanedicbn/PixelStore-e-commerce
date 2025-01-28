import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json());

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  res.json({ name, price });
});
