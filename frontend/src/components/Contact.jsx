import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-center items-center">
        <div className="mt-28">
          <h1 className="text-4xl">Contact Us</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" min-w-115 flex flex-col my-5 space-y-2"
          >
            <span>Name:</span>
            <input
              type="text"
              placeholder="Enter yout name"
              className="border border-gray-300 rounded-md px-3 py-1 outline-none"
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
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-3 py-1 outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}

            <span>Message:</span>
            <textarea
              type="text"
              placeholder="Type your message"
              className="border border-gray-300 rounded-md px-3 py-1 outline-none min-h-40 "
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          <div className="flex justify-center">
            <button className="btn btn-secondary text-white mt-6 flex ">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
