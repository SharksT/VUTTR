const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function(next) {
  var user = this;
  if (!user.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;