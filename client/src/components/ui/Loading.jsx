import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-black text-xl text-medium tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
