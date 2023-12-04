import React  from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorRegister from "./pages/DoctorRegister";
import Patient from "./pages/Patient";
import BookAppoint from "./pages/BookAppoint";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/user/patient" element={<Patient />} />
        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/user/book" element={<BookAppoint />} />
      </Routes>
    </>
  );
}

export default App;
