const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A User must have a Name"],
  },
  email: {
    type: String,
    require: [true, "A user must have a email"],
    unique: true,
  },
  mobile: {
    type: String,
    require: [true, "A user must have a mobile number"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "A User must add a Password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
