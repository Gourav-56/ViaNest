const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlus";
connectDB()
  .then(() => {
    console.log("Start hai beree");
  })
  .catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(MONGO_URL);
}

module.exports = connectDB;
