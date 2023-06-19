import Product from "../models/Product.js";
import { StatusCodes } from "http-status-codes";

const getAllProducts = async (req, res) => {
  let products = await Product.find();

  let users = products.filter((product) => product.productType == "user");
  let offers = products.filter((product) => product.productType == "offer");

  res.status(StatusCodes.OK).json({ users, offers });
};

const addProduct = async (req, res) => {
  const { user, description, tags, price, productType, productTitle } =
    req.body;
  let product = await Product.create({
    user,
    description,
    tags,
    price,
    productType,
    productTitle,
  });

  res.status(StatusCodes.OK).json({ product });
};
const updateProduct = async (req, res) => {
  const { user, description, tags, price, productType, productTitle } =
    req.body;
  let updatedProduct = await Product.patch({
    user,
    description,
    tags,
    price,
    productType,
    productTitle,
  });

  res.status(StatusCodes.OK).json({ updatedProduct });
};

export { getAllProducts, addProduct, updateProduct };
