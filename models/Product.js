import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
    },
    user: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: String,
    },
    price: {
      type: Number,
    },
    productType: {
      type: String,
      enum: ["user", "offer"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
