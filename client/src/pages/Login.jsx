import React from "react";
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const handelSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="mt-[200px]">
      <div className="container flex flex-col justify-center items-center ">
        <h1 className="text-[50px] font-normal font-main text-main mt-[30px] mb-[31px]">
          Welcome
        </h1>
        <form
          onSubmit={handelSubmit}
          className="w-[400px] bg-gray-50 shadow-2xs border border-amber-50 rounded-[6px] p-[20px]"
        >
          <Input label={"E-mail"} type="email" required placeholder={"Email"} />
          <Input
            label={"Password"}
            type="password"
            required
            placeholder={"Password"}
          />
          <div className="flex justify-between items-center my-[20px]">
            {/* Sign In Button */}
            <Button
              variant="primary"
              label=" Sign in"
                type="submit"
              size="md"
              className="flex justify-center"
            />
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
