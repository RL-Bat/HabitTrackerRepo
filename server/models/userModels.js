const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: Number, required },
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  password: { type: String },
});

// const User = mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema);
