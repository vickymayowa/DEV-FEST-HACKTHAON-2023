const asyncHandler = require("express-async-handler");
const doctorsModel = require("../models/doctorsModel");

const register = asyncHandler(async (req, res) => {
  const form = new doctorsModel({
    fullname: req.body.fullName,
    username: req.body.userName,
    email: req.body.email,
    phone: req.body.phoneNumber,
    address: req.body.address,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
  });

  try {
    const existingDoctor = await doctorsModel.findOne({
      email: req.body.email,
    });

    if (existingDoctor) {
      throw new Error("Doctor already exists");
    } else {
      await form.save();
      const savedDoctor = await doctorsModel.findOne({ email: req.body.email });
      res
        .status(200)
        .json({ message: "Doctor registered successfully", user: savedDoctor });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid user data", error: error.message });
    console.error(error);
  }
});


module.exports = { register };
