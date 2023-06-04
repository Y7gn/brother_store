import express from "express";
const router = express.Router();
import authenticateUser from "../middleware/auth.js";

import {
  register,
  login,
  logoutUser,
  getCurrentUser,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.get("/logout", logoutUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);

export default router;
