import React from "react";

const baseStyles ="inline-flex cursor-pointer items-center gap-[10px] justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-green text-main hover:bg-green-300 focus:ring-green-400",
    secondary: "bg-gray-200 text-main hover:bg-gray-300 focus:ring-gray-400",
    black:"bg-black hover:bg-transparent hover:text-black hover:border text-[#F3F3F3] py-[10px] px-[36px] ",
    outline:"border border-gray-400 text-main hover:bg-gray-100 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };


  const sizes = {
    sm: "px-3 py-1 text-sm ",
    md: "px-4 py-2 text-base ",
    lg: "text-[18px] font-normal text-main text-[#F3F3F3] ",
  };
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;