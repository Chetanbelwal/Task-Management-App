import express, { Router } from "express";
const router = express.Router();
import {
  createTask,
  deleteTask,
  updateTask,
  getMyTask,
  getSingleTask,
} from "../controllers/taskController.js";

router.route("/post").post(createTask);
router.route("/delete/:id").delete(deleteTask);
router.route("/update/:id").put(updateTask);
router.route("/mytask").get(getMyTask);
router.route("/single/:id").get(getSingleTask);

export default router;
