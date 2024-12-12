import express, { Router } from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  myProfile,
} from "../controllers/userController.js";

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(myProfile);
router.route("/register").post(register);


export default Router;