import React from "react";
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-white text-black">
      <div className="w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold font-poppins">
              Sign in to your account
            </h2>
            <p className="text-sm font-poppins">Welcome back!</p>
          </div>
        </div>
        <Input label={"E-mail"} type="email" placeholder={"Email"} />
        <Input label={"Password"} type="password" placeholder={"Password"} />
        <div className="flex justify-between items-center mb-4">
          {/* Sign In Button */}
          <Button
            variant="primary"
            label=" Sign in"
            type="button"
            size="md"
            className="flex justify-center"
          />
          {/* Remember Me + Forgot Password */}
          <Link
            to="/forgot-password"
            className="text-xs text-[#7364DB] font-poppins"
          >
            Forgot password?
          </Link>
        </div>
        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm font-poppins">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#7364DB]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
