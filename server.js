import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import ProductModel from "./models/product.js";

dotenv.config();
const app = express();

app.post("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newProduct = await ProductModel.create({ ...product });
    console.log(newProduct);
  } catch (err) {}
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
