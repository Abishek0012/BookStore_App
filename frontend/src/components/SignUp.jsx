import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //****************************************************************** CONNECTING IT WITH BACKEND

  const [loading, setLoading] = React.useState(false); //This prevents multiple clicks while the request is being processed

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      console.log(res.data);
      toast.success(res.data.message || "Signup Successfully");
      localStorage.setItem("Users", JSON.stringify(res.data.user)); //stores the signup data in local Storage(we will use this to restrict user from opening course tab without loging in)
      reset();
    } catch (err) {
      // Show backend error message if available
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
    setLoading(false);
  };

  // **************************************************************

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-600 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl relative p-5 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-md">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </Link>
          <h3 className="text-2xl font-bold justify-center items-center text-center mt-4 text-pink-500">
            Signup
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-2 sm:mx-5 flex flex-col my-5 space-y-3 sm:space-y-4"
          >
            <span className="block text-sm font-medium text-gray-700">
              Name:
            </span>
            <input
              type="text"
              placeholder="Enter Your FullName"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
            <span className="block text-sm font-medium text-gray-700">
              Email:
            </span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <span className="block text-sm font-medium text-gray-700">
              Password:
            </span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <div className="flex justify-center items-center mt-4">
              <button
                className="btn btn-secondary text-white w-full sm:w-auto px-6 py-2"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-4 mb-4 text-center">
            <h1 className="text-sm sm:text-base">
              Already Registerd!{" "}
              <button
                className="text-pink-500 underline cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
