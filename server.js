import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productPage from "./routes/productRoutes.js";
import ProductModel from "./models/product.js";

dotenv.config();
const app = express();
// parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productPage);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
