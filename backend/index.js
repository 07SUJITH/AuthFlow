/**
 * @fileoverview Entry point for the backend server.
 * @module index
 */

import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import path from "path";

/**
 * Load environment variables from .env file.
 */
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // Define the current directory path
// Cross-Origin Resource Sharing (CORS) is a security feature that allows servers to specify who can access their resources.
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse incoming requests: req.body  JSON data. (json to object)
app.use(cookieParser()); // Middleware to parse incoming cookies from the client. (cookie to object)
/**
 * Starts the server after establishing a database connection.
 * @async
 * @function startServer
 * @throws Will throw an error if the server fails to start.
 */
const startServer = async () => {
  try {
    await connectDB(); // Await the database connection
    app.listen(PORT, () => {
      console.log("Server is running on port : " + PORT);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

// Initialize the server
startServer();

/**
 * Middleware to handle authentication routes.
 * @name /api/auth
 * @function
 * @memberof module:index
 */
app.use("/api/auth", authRouter);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from the "frontend/dist" directory
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // Handle all other routes by serving the "index.html" file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

/**
 * Root route handler.
 * @name GET /
 * @function
 * @memberof module:index
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
