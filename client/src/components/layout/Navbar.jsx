import { FiZap, FiGlobe } from "react-icons/fi";
import logo from "../../../public/logo.png";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-[#1F1F1F] py-[2px]">
      <div className="container flex items-center justify-between">
        {/* Left */}
        <Link to={"/"}>
          <img src={logo} alt="logo" width={60} />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 text-xs sm:text-sm text-gray-300 hover:text-white">
            <FiGlobe />
            EN
          </button>

          {/* Login */}
          <Link to={"/signin"} className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full border border-gray-600 text-gray-200 hover:bg-gray-700 transition" > Log In</Link>

          {/* Sign Up */}
          <Link
            to={"/signup"}
            className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full bg-lime-400 text-black font-medium hover:bg-lime-300 transition"
          >
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
