import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name should have a minimum of 3 characters"],
    maxlength: [20, "Name cannot exceed 20 characters"],
    trim: true,
  },
  
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
    trim: true,
    unique: [true,"User already Registered"] // Ensures no duplicate emails in the database
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone should be of Minimum 10 Digit "],
    maxlength: [10, "Phone should be of Minimum 10 Digit"],
    trim: true, // Removes leading and trailing spaces
  },
  password: {
    type: String,
    required: true,
    minlength: [3, "password should have a minimum of 3 characters"],
    maxlength: [20, "password cannot exceed 20 characters"],
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
