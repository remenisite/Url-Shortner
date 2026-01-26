import React from "react";
import { RiUserLine } from "react-icons/ri";
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiPhone, FiMoon } from "react-icons/fi";
import { Link } from "react-router";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const SignUp = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-white text-black">
      <div className="w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold font-poppins">
              Create an account
            </h2>
            <p className="text-sm font-poppins">You are welcome!</p>
          </div>
        </div>

        {/* Input Fields */}
        <Input
          label={"Full Name"}
          type="text"
          placeholder={"enter your full name........"}
        />
        <Input label={"E-mail"} type="email" placeholder={"Email"} />
        <Input label={"Phone number"} type="tel" placeholder={"(+01)"} />
        <Input label={"Password"} type="password" placeholder={"Password"} />
        <Input
          label={"Confirm Password"}
          type="password"
          placeholder={"Confirm password"}
        />

        <Button
          variant="primary"
          label="Signup"
          type="button"
          size="md"
          className="flex justify-center"
        />

        {/* Terms */}
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" />
          <p className="text-xs font-poppins">
            I agree with terms & conditions
          </p>
        </div>

        {/* Social Login */}
        <div className="flex justify-between gap-4 mb-4">
          <Link
            to="/"
            className="flex items-center gap-2 border px-4 py-3 rounded-md text-xs font-poppins w-1/2 justify-center"
          >
            <FcGoogle /> Google account
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 border px-4 py-3 rounded-md text-xs font-poppins w-1/2 justify-center"
          >
            <FaFacebook className="text-blue-600" /> Facebook account
          </Link>
        </div>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm font-poppins">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#7364DB]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
