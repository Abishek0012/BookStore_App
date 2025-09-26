import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Contacts from "./contact/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
