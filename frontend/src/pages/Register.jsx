import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const Navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [buttonText, setButtonText] = useState("Create Account");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    userName: Yup.string().required("User Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    gender: Yup.string().required("Gender is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    password: Yup.string().required("Password is required"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      address: "",
      gender: "",
      dateOfBirth: "",
      password: "",
      agreeTerms: true,
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/user/register", formik.values)
        .then((response) => {
          console.log(response.data.message);
          Navigate("/auth/login");
          toast(response.data.message);
          setButtonText("Authenticating.......");
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
              User Register
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
                  UserName
                </label>
                <input
                  type="text"
                  value={formik.values.userName}
                  name="userName"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your UserName"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.userName}</small>
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
                  Password
                </label>
                <input
                  type="password"
                  value={formik.values.password}
                  name="password"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your Password"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.password}</small>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    value={formik.values.agreeTerms}
                    name="agreeTerms"
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="ml-2 text-sm text-gray-600"
                  >
                    I Agree to the terms and conditions.
                  </label>
                  <small className="text-red-600">
                    {formik.errors.agreeTerms}
                  </small>
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className={`w-full px-4 py-2 ${
                    isChecked ? "bg-green-500" : "bg-blue-500"
                  } text-white rounded-md ${
                    isChecked ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  disabled={!isChecked}
                  onClick={() => formik.handleSubmit()}
                >
                  {buttonText}
                </button>
              </div>
            </form>
            {/* </Formik> */}
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;