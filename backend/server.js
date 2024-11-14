import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", ProductRoute);

// Server initialization
const server = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(`Failed to connect to the database: ${err.message}`);
  }
};

server();
