import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGODB_URI);
    console.log("Database connected successfully ✅");
  } catch (error) {
    console.log("Error in DB connection", error);
    process.exit(1);
  }
};
