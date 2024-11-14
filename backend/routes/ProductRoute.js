import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/products.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);
router.get("/get", getProduct);
export default router;
