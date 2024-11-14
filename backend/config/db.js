import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database is connected successfully.`);
    return db;
  } catch (err) {
    console.error(`Database not connected: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
