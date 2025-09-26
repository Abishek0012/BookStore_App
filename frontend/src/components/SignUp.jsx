import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-600">
        <div className="bg-slate-100 rounded-2xl relative p-5">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </Link>
          <h3 className="text-xl font-bold justify-center items-center text-center mt-4 text-pink-500">
            Signup
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-5 min-w-115 flex flex-col my-5 space-y-2"
          >
            <span>Name:</span>
            <input
              type="text"
              placeholder="Enter Your FullName"
              className="border rounded-md px-3 py-1 outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
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
            <div className="flex justify-center items-center mt-4">
              <button className="btn btn-secondary text-white">Signup</button>
            </div>
          </form>
          <div className="flex justify-center items-center mt-4 mb-4">
            <h1>
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
