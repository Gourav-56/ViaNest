const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const connectDB = require("../init/start.js");

async function init() {
  await connectDB();
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
