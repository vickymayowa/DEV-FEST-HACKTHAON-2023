import { React, useState } from "react";
// import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const BookAppoint = () => {
  const [buttonText, setButtonText] = useState("Book Appointment");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    gender: Yup.string().required("Gender is required"),
    dateOfBirth: Yup.date().required("Date is required"),
    duration: Yup.string().required("Duration is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      gender: "",
      dateOfBirth: "",
      duration: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/user/bookAppoint", formik.values)
        .then((response) => {
          console.log(response.data.message);
          toast(response.data.message);
        })
        .catch((error) => {
          toast(error.response.data.message);
        });
    },
  });
  return (
    <>
      <div className="flex items-center justify-center h-screen mt-5">
        <div className="w-full max-w-lg">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4 mt-5 text-black">
              Book Appointment
            </h3>
            {/* <Formik validationSchema={validationSchema} onSubmit={formik.handleSubmit}> */}
            <form onSubmit={formik.handleSubmit} className="signin-form">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={formik.values.fullName}
                  name="fullName"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your Full Name"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.fullName}</small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={formik.values.email}
                  name="email"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your Email"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.email}</small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your Phone Number"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">
                  {formik.errors.phoneNumber}
                </small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  value={formik.values.address}
                  name="address"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Address"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.address}</small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  value={formik.values.gender}
                  className="w-full p-2 border rounded bg-white text-dark"
                  onChange={formik.handleChange}
                >
                  <option value="">-----</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <small className="text-red-600">{formik.errors.gender}</small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-600"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  value={formik.values.dateOfBirth}
                  name="dateOfBirth"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder=""
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">
                  {formik.errors.dateOfBirth}
                </small>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Duration
                </label>
                <input
                  type="time"
                  value={formik.values.duration}
                  name="duration"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your Duration"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.duration}</small>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white"
                  onClick={() => formik.handleSubmit()}
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppoint;
