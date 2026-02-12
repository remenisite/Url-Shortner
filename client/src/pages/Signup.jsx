import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router";

import { authServices } from "../api";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const Signup = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await authServices.registration(data);
      toast.success(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        Navigate("/login");
      }, 2000);
    } catch (error) {
      if (error.response.data.message === "User already axixt") {
        return setError("email", {
          message: error.response.data.message,
        });
      }
      setError("apiError", {
        message: error.response.data.message,
      });
    }
  };

  return (
    <section className="container flex flex-col justify-center items-center ">
            <h1 className="text-[50px] font-normal font-main text-main mt-7.5 mb-7.75">  Create your account  </h1>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[250px]"
        method="POST"
        action="#"
      >
        <div className="flex flex-col gap-[20px] mb-[30px]">
          <Input
            {...register("fullName", { required: "Full Name is required" })}
            label="Full Name"
            placeholder="Enter your full name"
            error={errors?.fullName?.message}
          />
          <Input
            {...register("email", { required: "Email is required" })}
            label="Email"
            type="email"
            placeholder="Enter your Email address"
            error={errors?.email?.message}
          />
          <Input
            {...register("password", { required: "Passwird is required" })}
            label="Password"
            type="password"
            placeholder="Enter your Password"
            error={errors?.password?.message}
          />
        </div>
        {errors?.apiError?.message && (
          <p className="text-base text-red-500">{errors.apiError.message}</p>
        )}
        <Button type="submit" variant="primary">
          submit{" "}
        </Button>
        <p>
          already account? <Link to={"/login"}>Login</Link>
        </p>
      </form> */}

              <div className=" w-100 bg-gray-50 shadow-2xs border border-amber-50 rounded-md p-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Input Fields */}
            <Input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              error={errors?.fullName?.message}
              label={"Full Name"}
              placeholder={"enter your full name........"}
            />
            <Input
              {...register("email", { required: "email is required" })}
              label={"E-mail"}
              error={errors?.email?.message}
              type="email"
              placeholder={"Email"}
            />
            <Input
              {...register("password", { required: "password is required" })}
              error={errors?.password?.message}
              label={"Password"}
              type="password"
              placeholder={"Password"}
            />
            <Input
              label={"Confirm Password"}
              type="password"
              placeholder={"Confirm password"}
            />
            {errors?.apiError?.message && (
              <p className="text-base text-red-500">
                {errors.apiError.message}
              </p>
            )}
            <Button type="submit">Create Account</Button>
          </form>
          {/* Sign In Link */}
          <div className="text-center mt-5">
            <p className="text-[15px] font-normal font-main text-main">
              Already have an account?
              <Link
                to="/login"
                className="font-medium hover:border-b transition"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>


    </section>
  );
};

export default Signup;
