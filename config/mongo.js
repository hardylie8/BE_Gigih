const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL
  ? process.env.DATABASE_URL
  : "mongodb://127.0.0.1/gigih_play";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
