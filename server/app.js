import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

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
app.use(cookieParser)

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

export default app;
