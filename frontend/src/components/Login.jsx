import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

function Login() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //  const onSubmit = (data) => console.log(data);

  //****************************************************************** CONNECTING IT WITH BACKEND

  const [loading, setLoading] = React.useState(false); //This prevents multiple clicks while the request is being processed

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      console.log(res.data.user);
      toast.success(res.data.message || "Login Successfully");
      localStorage.setItem("Users", JSON.stringify(res.data.user)); //stores the signup data in local Storage(we will use this to restrict user from opening course tab without loging in)

      // Close modal after successful login
      const loginModal = document.getElementById("my_modal_3");
      if (loginModal) loginModal.close();
      reset();

      dispatch(loginSuccess(res.data.user)); //IT WORKS AS A TRIGGER TO TAKE ACTION IN authSlice.js
    } catch (err) {
      // Show backend error message if available
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
    setLoading(false);
  };

  // **************************************************************

  const navigate = useNavigate();
  const location = useLocation(); // get current route

  const handleClose = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();

    // Conditional navigation
    if (location.pathname === "/signup") {
      navigate("/"); // go to home only if current page is signup
    }
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold justify-center items-center text-center mt-5 text-pink-500">
              Login
            </h3>
            <form
              className="flex flex-col my-5 space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <span>Email:</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border rounded-md px-3 py-1 outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <span>Password:</span>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border rounded-md px-3 py-1 outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <div className="flex justify-center items-center mt-5">
                <button
                  className="btn btn-secondary text-white w-full sm:w-auto px-6 py-2"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
            <div className="flex flex-col justify-center items-center mt-4">
              <h1>
                Not Resisterd!{" "}
                <Link to="/signup" className="text-pink-500 underline">
                  Signup
                </Link>
              </h1>
              <h1>
                OR{" "}
                <Link
                  to="/"
                  className="text-pink-500 underline"
                  onClick={handleClose}
                >
                  Home
                </Link>
              </h1>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
