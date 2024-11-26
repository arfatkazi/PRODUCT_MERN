import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  console.log("Incoming request body:", req.body);
  try {
    const { name, price, image } = req.body;

    if (!name || price === undefined || !image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all the fields!" });
    }

    const productPrice = parseFloat(price);

    if (isNaN(productPrice)) {
      return res.status(400).json({
        success: false,
        message: "Price must be a valid number!",
      });
    }

    const product = new Product({
      name: name,
      price: price,
      image: image,
    });

    const savedProduct = await product.save();

    return res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: savedProduct,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid product id!",
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: deletedProduct,
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the product.",
    });
  }
};

export const updateProduct = async (req, res) => {
  let { id } = req.params;
  const { name, price, image } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product don't match by ID!" });
    }

    return res.status(200).json({
      success: true,
      message: "Product was updated successfully!",
      data: updatedProduct,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found!" });
    }

    return res.status(200).json({
      success: true,
      message: "All products",
      data: products,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// export const getProduct = async (req, res) => {
//   try {
//     // Get pagination parameters from query string (defaults to page 1 and 10 items per page)
//     const { page = 1, limit = 10, name, price } = req.query;

//     // Build the filter object dynamically based on the query parameters
//     const filter = {};
//     if (name) filter.name = new RegExp(name, 'i'); // Case-insensitive search by name
//     if (price) filter.price = price;

//     // Fetch products with pagination and filter
//     const products = await Product.find(filter)
//       .skip((page - 1) * limit)  // Skip products from previous pages
//       .limit(Number(limit)); // Limit the number of products per page

//     // Return response
//     return res.status(200).json({
//       success: true,
//       message: "Fetched products successfully.",
//       data: products,
//     });
//   } catch (err) {
//     return res.status(500).json({ success: false, message: err.message });
//   }
// };
