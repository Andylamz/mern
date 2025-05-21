import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import productPage from "./routes/productRoutes.js";

const __dirname = path.resolve();

dotenv.config({ path: "./backend/.env" });
const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors());
// parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productPage);

// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Handle all other routes by serving the index.html
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
