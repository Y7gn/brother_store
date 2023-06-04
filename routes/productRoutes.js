import express from "express";
const router = express.Router();
import {
  getAllProducts,
  addProduct,
} from "../controllers/ProductController.js";

router.route("/").get(getAllProducts);
router.route("/addProduct").post(addProduct);

export default router;
