import { React, } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("User Name is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/api/user/login", { ...formik.values })
        .then((response) => {
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
        <div className="w-full max-w-md">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-4 mt-5 text-dark">
              Login
            </h3>
            <form onSubmit={formik.handleSubmit} className="signin-form">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  UserName
                </label>
                <input
                  type="text"
                  value={formik.values.username}
                  name="username"
                  className="w-full p-2 border rounded bg-white text-dark"
                  placeholder="Enter your UserName"
                  onChange={formik.handleChange}
                />
                <small className="text-red-600">{formik.errors.username}</small>
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
              <Link
                for="name"
                to="/ForgetPassword"
                className="flex justify-end font-medium text-gray-600"
              >
                Forget Password
              </Link>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => formik.handleSubmit()}
                >
                 Login
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <Link to="/auth/register" className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
