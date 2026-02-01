import React from "react";
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";
import { apiServices } from "../api";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const handelLogin = async (data) => {
    try {
      const res = await apiServices.signin(data);
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
    } catch (error) {
      setError("apiError", {
        message: error?.response?.data?.message || "try again",
      });
    }
  };
  return (
    <section className="mt-[200px]">
      <div className="container flex flex-col  justify-center items-center ">
        <h1 className="text-[50px] font-normal font-main text-main mt-[30px] mb-[31px]">
          Welcome
        </h1>
        <form
          onSubmit={handleSubmit(handelLogin)}
          className="w-[400px] bg-gray-50 shadow-2xs border flex flex-col gap-4 border-amber-50 rounded-[6px] p-[20px]"
        >
          <Input
            {...register("email", { required: "Email is required" })}
            error={errors?.email?.message}
            label={"E-mail"}
            type="email"
            placeholder={"Email"}
          />
          <Input
            {...register("password", { required: "Pasword is required" })}
            error={errors?.password?.message}
            label={"Password"}
            type="password"
            placeholder={"Password"}
          />
          {errors?.apiError?.message && (
            <p className="text-base text-red-500 mt-5">
              {errors.apiError.message}
            </p>
          )}
          <div className="flex justify-between items-center my-[20px]">
            <Button type="submit">Sign in</Button>
            {/* Remember Me + Forgot Password */}
            <Link
              to="/forgot-password"
              className="text-[14px] font-normal font-main text-main "
            >
              Forgot password?
            </Link>
          </div>
          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-[15px] font-normal font-main text-main">
              Don’t have an account?
              <Link
                to="/signup"
                className="font-medium hover:border-b transition"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
