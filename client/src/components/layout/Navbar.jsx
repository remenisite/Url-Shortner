import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#1F1F1F] py-[2px]">
      <div className="container flex items-center justify-between">
        {/* Left */}
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" width={60} />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 text-xs sm:text-sm text-gray-300 hover:text-white">

            EN
          </button>

          {/* Login */}
          <Link
            to={"/signin"}
            className="text-[18px] font-normal font-main text-white border border-white rounded-xl px-3 sm:px-4 py-1.5 hover:text-black hover:bg-green transition"
          >
            {" "}
            Log In
          </Link>

          {/* Sign Up */}
          <Link
            to={"/signup"}
            className="text-[18px] font-normal font-main text-white border border-white rounded-xl px-3 sm:px-4 py-1.5 hover:text-black hover:bg-green transition"
          >
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;