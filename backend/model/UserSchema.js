const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must Provide the Password!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Must Provide the email"],
    trim: true,
  },
});
module.exports = mongoose.model("User", schema);
