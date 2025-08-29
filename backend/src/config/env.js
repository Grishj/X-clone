import dotenv from "dotenv";
dotenv.config();
export const ENV = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,

  JWT_SECRET: process.env.JWT_SECRET,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  CLERK_JWT_KEY: process.env.CLERK_JWT_KEY,
  ARCJET_API_KEY: process.env.ARCJET_API_KEY,
};
