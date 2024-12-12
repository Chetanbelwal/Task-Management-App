import app from "./app.js";
import connectToDb from "./utils/db.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Define port and start server
const PORT = process.env.PORT || 5000;

connectToDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
});
