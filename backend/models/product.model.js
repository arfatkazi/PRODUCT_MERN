import mongoose from "mongoose";
import validator from "validator";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
