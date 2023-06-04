// import cors from 'cors';
import express from "express";
dotenv.config();
const app = express();
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
import connectDB from "./db/connect.js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import cookieParser from "cookie-parser";

// routes
import authRouter from "./routes/authRoutes.js";

import productRoutes from "./routes/productRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/error.handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome " });
// });

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cookieParser());
//public///// assest
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/products", productRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listning ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
