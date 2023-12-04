const mongoose = require("mongoose");

const bookAppointmentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  address: {
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
  duration: {
    type: String, // Adjust the type based on the nature of the duration data
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

const bookAppointmentModel = mongoose.model(
  "BookAppointment",
  bookAppointmentSchema
);


module.exports = bookAppointmentModel;
