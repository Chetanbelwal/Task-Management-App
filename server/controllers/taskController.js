// Import statements
import  catchAsyncErrors  from "../middlewares/catchAsyncErrors.js";
// import ErrorHandler from "../middlewares/error.js";
import  Task  from "../models/task-model.js";

// Task controller functions
export const createTask = catchAsyncErrors(async (req, res, next) => {
  // Logic for creating a task
});

export const deleteTask = catchAsyncErrors(async (req, res, next) => {
  // Logic for deleting a task
});

export const updateTask = catchAsyncErrors(async (req, res, next) => {
  // Logic for updating a task
});

export const getMyTask = catchAsyncErrors(async (req, res, next) => {
  // Logic for fetching all tasks for a user
});

export const getSingleTask = catchAsyncErrors(async (req, res, next) => {
  // Logic for fetching a single task
});
