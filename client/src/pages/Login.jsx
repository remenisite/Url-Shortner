import React from 'react';
import { IoMailOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { Link } from 'react-router';

const SignIn = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-[#fdf6f0] text-black">
      <div className="w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center w-full">
            <h2 className="text-2xl font-bold font-poppins">Sign in to your account</h2>
            <p className="text-sm font-poppins">Welcome back!</p>
          </div>
          <button className="ml-2 p-2 rounded-md border" title="Toggle dark / light">
            <FiMoon className="text-gray-700" />
          </button>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-poppins block mb-2">E-mail</label>
          <div className="flex items-center border px-3">
            <input type="email" placeholder="Email" className="w-full py-2 outline-none bg-transparent text-sm font-poppins" />
            <IoMailOutline />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-poppins block mb-2">Password</label>
          <div className="flex items-center border px-3">
            <input type="password" placeholder="Password" className="w-full py-2 outline-none bg-transparent text-sm font-poppins" />
            <IoEyeOutline />
          </div>
        </div>

        {/* Sign In Button */}
        <button className="w-full py-3 my-4 bg-[#7364DB] text-white rounded-md hover:scale-105 transition duration-300 font-semibold font-poppins">
          Sign in
        </button>

        {/* Remember Me + Forgot Password */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-xs font-poppins">Remember me</p>
          </div>
          <Link to="/forgot-password" className="text-xs text-[#7364DB] font-poppins">
            Forgot password?
          </Link>
        </div>

        {/* Social Login */}
        <div className="flex justify-between gap-4 mb-4">
          <Link to="/" className="flex items-center gap-2 border px-4 py-3 rounded-md text-xs font-poppins w-1/2 justify-center">
            <FcGoogle /> Google account
          </Link>
          <Link to="/" className="flex items-center gap-2 border px-4 py-3 rounded-md text-xs font-poppins w-1/2 justify-center">
            <FaFacebook className="text-blue-600" /> Facebook account
          </Link>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm font-poppins">
            Don’t have an account? <Link to="/signup" className="text-[#7364DB]">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
