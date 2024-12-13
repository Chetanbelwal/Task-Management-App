import ErrorHandler from "../middlewares/error.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import cloudinary from "cloudinary";

// -----------------------Registration Logic----------------//

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

  // Send response back to the client
  res.status(201).json({
    success: true,
    message: "User registered successfully!",
  });
});

// -----------------------Login Logic----------------//

const login = catchAsyncErrors(async (req, res, next) => {
  // Logic for logging in a user
});

const logout = catchAsyncErrors(async (req, res, next) => {
  // Logic for logging out a user
});

const myProfile = catchAsyncErrors(async (req, res, next) => {
  // Logic for fetching user profile
});

export { register, login, logout, myProfile };
