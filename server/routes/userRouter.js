import express, { Router } from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  myProfile,
} from "../controllers/userController.js";

import { isAuthenticated } from "../middlewares/auth.js";

router.route("/login").post(login);
router.route("/logout").get(isAuthenticated,logout);
router.route("/me").get(isAuthenticated,myProfile);
router.route("/register").post(register);


export default router;