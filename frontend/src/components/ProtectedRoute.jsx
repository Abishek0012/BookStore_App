import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user); // get logged-in user from Redux

  if (!user) {
    const loginModal = document.getElementById("my_modal_3");
     if (loginModal) loginModal.showModal();

     // Return nothing because modal handles login
     return null;
  }
  
  return children;
};

export default ProtectedRoute;
