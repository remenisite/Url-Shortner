import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../components/utils/Button";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center ">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h2 className="text-[20px] font-normal font-main text-primary bg-[#ECECEC]">
          Quick. Clean. Shareable.
        </h2>
        <h1 className="text-[72px] font-normal font-main text-main">
          Create{" "}
          <span className="font-medium bg-green rounded-[12px]">
            Shortest URLs
          </span>
        </h1>
        <p className="text-[20px] font-normal font-main text-primary">
          The world's easiest and smartest link shortener to instantly track,
          customize, and share your URLs with style.
        </p>

        <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Long URL Input */}
            <input
              type="text"
              placeholder="Enter long link here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Dropdown for short type */}
            {/* <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select short type</option>
          <option value="basic">Basic</option>
          <option value="custom">Custom</option>
        </select> */}

            {/* Shorten Button */}
            <Button   label="Go"   variant="primary"  size="md" onClick={() => console.log("Go clicked")}icon={FaArrowRight}
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          By clicking 'Shorten URL', you agree to Tiny's Terms of Use and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Home;
