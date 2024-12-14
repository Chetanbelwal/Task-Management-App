import ErrorHandler from "../middlewares/error.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import cloudinary from "cloudinary";
import User from "../models/user-model.js";
import { sendToken } from "../utils/jwtToken.js";

//-----------------------------------------------------------
// -----------------------Registration Logic----------------//
//----------------------------------------------------------

const register = catchAsyncErrors(async (req, res, next) => {
  // Logic for registering a user
  //   If we didn't get any File/avatar
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("User Avatar Required!", 400));
  }

  const { avatar } = req.files; // Extract the avatar file from the request
  const allowedFormats = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/avif",
  ]; // Allowed formats

  if (!allowedFormats.includes(avatar.mimetype)) {
    return next(
      new ErrorHandler(
        "Please provide avatar in png, jpg, webp, or avif format!",
        400
      )
    );
  }
  const { name, email, phone, password } = req.body;

  // Check for missing fields
  if (!name || !email || !phone || !password) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists!", 400));
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(
    avatar.tempFilePath
  );

  // Handle Cloudinary errors
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error: ",
      cloudinaryResponse?.error?.message || "Unknown cloudinary error!"
    );

    return next(
      new ErrorHandler(
        cloudinaryResponse?.error?.message ||
          "Failed to upload avatar. Please try again later.",
        500
      )
    );
  }

  user = await User.create({
    name,
    email,
    phone,
    password,
    avatar: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  sendToken("User Registered!", user, res, 200);
});

//---------------------------------------------------------------------
// ----------------------------------------Login Logic----------------//
//----------------------------------------------------------------------

const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email  or password!", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email  or password!", 400));
  }

  sendToken("User Logged In!", user, res, 200);
});


//---------------------------------------------------------------------
// ----------------------------------------Logout Logic----------------//
//----------------------------------------------------------------------


const logout = catchAsyncErrors((req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "User Logged Out!",
    });
});


//---------------------------------------------------------------------
// ----------------------------------------My Profile Logic----------------//
//----------------------------------------------------------------------

const myProfile = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export { register, login, logout, myProfile };
