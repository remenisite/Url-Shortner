import React from "react";

const Button = ({
  label = "",
  onClick = () => {},
  variant = "primary",
  size = "md",
  icon: Icon = null,
  type = "button",
  className = "",
  disabled = false,
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium font-main  rounded-full w-[200px] transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variants
  const variants = {
    primary: "bg-green text-main hover:bg-green-300 focus:ring-green-400",
    secondary: "bg-gray-200 text-main hover:bg-gray-300 focus:ring-gray-400",
    black:"bg-black hover:bg-transparent hover:text-black hover:border text-[#F3F3F3] py-[15px] px-[36px] ",
    outline:
      "border border-gray-400 text-main hover:bg-gray-100 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1 text-sm ",
    md: "px-4 py-2 text-base ",
    lg: "text-[18px] font-normal text-main text-[#F3F3F3] ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;
