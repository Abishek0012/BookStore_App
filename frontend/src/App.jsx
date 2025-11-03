import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Contacts from "./contact/Contacts";
import ProtectedRoute from "./components/ProtectedRoute"; 

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/Login";


function App() {


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Always mount the login modal somewhere */}
      <Login />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element=
        {
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
        />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
