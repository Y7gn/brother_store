import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
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
    // name: {
    //   type: String,
    // },
    // description: {
    //   type: String,
    // },
    // image: {
    //   type: String,
    // },
    // tags: {
    //   type: String,
    // },
    // price: {
    //   type: Number,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
