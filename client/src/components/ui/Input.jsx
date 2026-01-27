import React from "react";

const baseStyles =
  "w-full rounded-md border my-[10px] text-sm transition focus:outline-none focus:ring-2";

const sizes = {
  lg: " text-[14px] font-normal text-main  placeholder:text-[#A4A4A4] focus:outline-none",
  sm: "px-3 py-1.5 text-sm",
  md: "px-3 py-2 text-sm",
};

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  size = "md",
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="mb-1 block text-[16px] font-main font-medium text-black"
        >
          {label}
        </label>
      )}

      {/* Input */}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          ${baseStyles}
          ${sizes[size]}
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${className}
        `}
        required={props.required}
        {...props}
      />

      {/* Helper / Error Text */}
      {(helperText || error) && (
        <p
          className={`mt-1 text-xs ${error ? "text-red-600" : "text-gray-500"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
