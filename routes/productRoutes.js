import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";

const router = express();

router.post("/", createProduct);

router.get("/", getProducts); 

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

export default router;
