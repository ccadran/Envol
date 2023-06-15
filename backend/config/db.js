const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Mongo connecté"));
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit();
  }
};

module.exports = connectDB;
