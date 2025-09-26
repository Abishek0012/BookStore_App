import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const onSubmit = (data) => console.log(data);
   


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
              {errors.email&& <span className="text-red-500 text-sm">This field is required</span>}
              <span>Password:</span>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border rounded-md px-3 py-1 outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
              <div className="flex justify-center items-center mt-5">
                <button className="btn btn-secondary text-white">Login</button>
              </div>
            </form>
            <div className="flex justify-center items-center mt-4">
              <h1>
                Not Resisterd!{" "}
                <Link to="/signup" className="text-pink-500 underline">
                  Signup
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
