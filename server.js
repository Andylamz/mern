import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productPage from "./routes/productRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// CORS
app.use(cors());
// parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productPage);

app.listen(PORT || 5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
