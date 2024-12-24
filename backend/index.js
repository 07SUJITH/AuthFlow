/**
 * @fileoverview Entry point for the backend server.
 * @module index
 */

import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
/**
 * Load environment variables from .env file.
 */
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
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
