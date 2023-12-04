const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleString(),
  },
  updatedAt: {
    type: Date,
    default: new Date().toLocaleString(),
  },
});

let saltRound = 10;
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, saltRound, (err, passwordHash) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    this.password = passwordHash;
  });
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const doctorsModel = mongoose.model("Doctor", userSchema);
module.exports = doctorsModel;
