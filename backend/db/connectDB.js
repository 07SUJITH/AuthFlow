import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  // Check if MONGO_URI is defined
  if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI environment variable is not defined.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in connection to MongoDB: ${error.message}`);
    process.exit(1); // Exit with failure status code (1) if connection fails
  }
};
