const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  price: {
    type: String,
    required: [true, "Must Provide the price!"],
    trim: true,
  },
  detail: {
    type: String,
    required: [false],
    trim: true,
  },
  requests: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("Products", schema);
