import React, { useState, memo } from "react";
import { OfflineIcon } from "@/public/assets/svg/OffOutlineIcon";
import { OutlineIcon } from "@/public/assets/svg/OutlineIcon";
/**
 * InputPassword.
 * 
 * @param {string} className - className.
 * @param {string} name - field name.
 * @param {string} value - string from input.
 * @param {function} [onChange] - onchange state value cb.
 * @param {string} placeholder - placeholder.
 */
const InputPassword = memo(({
  className,
  name,
  value,
  onChange,
  placeholder = "Password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`self-stretch inline-flex flex-col justify-start items-start gap-1 ${className}`}>
      {/* Input Container */}
      <div className="self-stretch h-11 px-4 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-[#8e8e8e] inline-flex justify-between items-center gap-4">
        {/* Input Field */}
        <input
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-[#011e2a] text-base"
          autoComplete="current-password"
        />
        {/* Toggle Password Visibility Button */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-[#8e8e8e] hover:text-[#011e2a] transition"
        >
          {showPassword ? (
            <OfflineIcon className="w-5 h-5" />
          ) : (
            <OutlineIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
});

export default InputPassword;
