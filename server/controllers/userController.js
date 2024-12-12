import {catchAsyncErrors} from '../middlewares/catchAsyncErrors.js'


const register = catchAsyncErrors(async (req, res, next) => {
    // Logic for registering a user
  });
  
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
