import express, { Router } from "express";
const router = express.Router();
import {
  createTask,
  deleteTask,
  updateTask,
  getMyTask,
  getSingleTask,
} from "../controllers/taskController.js";

router.route("/create").post(createTask);
router.route("/delete").delete(deleteTask);
router.route("/update").patch(updateTask);
router.route("/get").get(getMyTask);
router.route("/getSingle").get(getSingleTask);

export default Router;
