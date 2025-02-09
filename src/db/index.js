const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection string

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

module.exports = mongoose;
