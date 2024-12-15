// Import statements
import  catchAsyncErrors  from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import  Task  from "../models/task-model.js";

// Task controller functions


//---------------------------------------------------------------------
// ----------------------------------------Create Task Logic----------------//
//----------------------------------------------------------------------


export const createTask = catchAsyncErrors(async (req, res, next) => {
  const { title, description } = req.body;
  const createdBy = req.user._id;
  const task = await Task.create({
    title,
    description,
    createdBy,
  });
  res.status(200).json({
    success: true,
    task,
    message: "Task Created",
  });
});


//---------------------------------------------------------------------
// ----------------------------------------Delete Task Logic----------------//
//----------------------------------------------------------------------




export const deleteTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task Deleted!",
  });
});



//---------------------------------------------------------------------
// ----------------------------------------Update Task Logic----------------//
//----------------------------------------------------------------------




export const updateTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  // new: true:
  // Ensures that the updated document is returned after the update.
  // Without this, Mongoose would return the document as it was before the update.
  // runValidators: true:
  // Ensures Mongoose runs validation rules defined in your schema when updating the document.
  // By default, validations are only applied when creating a document, not during updates.
  // useFindAndModify: false:
  // Ensures Mongoose uses the MongoDB driver's findOneAndUpdate function rather than the deprecated findAndModify method.


  res.status(200).json({
    success: true,
    message: "Task Updated!",
    task,
  });
});



//---------------------------------------------------------------------
// ----------------------------------------Get My Task Logic----------------//
//----------------------------------------------------------------------




export const getMyTask = catchAsyncErrors(async (req, res, next) => {
  const user = req.user._id;
  const tasks = await Task.find({ createdBy: user });
  res.status(200).json({
    success: true,
    tasks,
  });
});




//---------------------------------------------------------------------
// ----------------------------------------Get Single Task Logic----------------//
//----------------------------------------------------------------------





export const getSingleTask = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let task = await Task.findById(id);
  if (!task) {
    return next(new ErrorHandler("Task not found!", 400));
  }
  res.status(200).json({
    success: true,
    task,
  });
});

