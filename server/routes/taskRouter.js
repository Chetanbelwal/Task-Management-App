import express, { Router } from "express";
const router = express.Router();
import {
  createTask,
  deleteTask,
  updateTask,
  getMyTask,
  getSingleTask,
} from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.route("/post").post(isAuthenticated, createTask);
router.route("/delete/:id").delete(isAuthenticated, deleteTask);
router.route("/update/:id").put(isAuthenticated, updateTask);
router.route("/mytask").get(isAuthenticated, getMyTask);
router.route("/single/:id").get(isAuthenticated, getSingleTask);

export default router;
