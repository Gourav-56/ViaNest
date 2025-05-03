const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: defaultImage,
    set: (v) => (!v || v.trim() === "" ? defaultImage : v),
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
