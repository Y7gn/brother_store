import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

const getAllProducts = async (req, res) => {
  let products = await Product.find();

  let users = products.filter((product) => product.productType == "user");
  let offers = products.filter((product) => product.productType == "offer");

  res.status(StatusCodes.OK).json({ users, offers });
};

const addProduct = async (req, res) => {
  const { user, description, tags, price } = req.body;
  let product = await Product.create({ user, description, tags, price });

  // let fruit = products.filter((product) => product.tags == "fruit");
  // let snacks = products.filter((product) => product.tags == "snacks");
  // let dairy = products.filter((product) => product.tags == "dairy");
  // let food = products.filter((product) => product.tags == "food");
  // let cup = products.filter((product) => product.tags == "cup");
  res.status(StatusCodes.OK).json({ product });
};

export { getAllProducts, addProduct };
