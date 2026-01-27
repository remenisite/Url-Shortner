import React from "react";
import { RiUserLine } from "react-icons/ri";
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiPhone, FiMoon } from "react-icons/fi";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <section className="">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-normal font-main text-main mt-[30px] mb-[31px]">
          Create your account
        </h1>
        <div className=" w-[400px] bg-gray-50 shadow-2xs border border-amber-50 rounded-[6px] p-[20px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Input Fields */}
            <Input type="text"   {...register("fullName", {required: "Full Name is required"})} error={errors?.fullName?.message}   label={"Full Name"}  placeholder={"enter your full name........"}/>
            <Input  {...register("email", {required: "email is required"} )}    label={"E-mail"}  error={errors?.email?.message}   type="email"     placeholder={"Email"}/>
            <Input    {...register("password" , {required: "password is required"})}  error={errors?.password?.message}  label={"Password"}        type="password"   placeholder={"Password"} />
            <Input   label={"Confirm Password"}   type="password"    placeholder={"Confirm password"}     />
            <Button type="submit">Create Account</Button>
  
          </form>
          <div className="flex items-center gap-[10px] my-[30px]">
            <input id="link" type="checkbox" className="text-[100px]" />
            <label
              htmlFor="link"
              className="text-[14px] font-normal font-main text-main "
            >
              I agree with terms & conditions
            </label>
          </div>
          {/* Social Login */}
          <div className="flex justify-between gap-4 mb-4">
            <Link
              to="/"
              className="flex items-center gap-2 border px-4 py-3 rounded-md text-[12px] font-normal font-main text-main"
            >
              <FcGoogle /> Google account
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 border px-4 py-3 rounded-md text-[12px] font-normal font-main text-main"
            >
              <FaFacebook className="text-blue-600" /> Facebook account
            </Link>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-[15px] font-normal font-main text-main">
              Already have an account?
              <Link
                to="/signin"
                className="font-medium hover:border-b transition"         
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
