import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import errorMiddleware from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";

import taskRouter from "./routes/taskRouter.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Define CORS options
const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// Apply CORS middleware with options
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes here
app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

app.use(errorMiddleware);

export default app;
