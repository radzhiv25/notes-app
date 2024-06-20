import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Password = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Enter password</label>
        <div className="pr-2 border rounded-md flex items-center justify-between">
        <input
          value={value}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder || "Password"}
          className="outline-none p-2 rounded-l-md"
        />
        {showPassword ? (
          <FaRegEye
            size={20}
            className="text-gray-500 cursor-pointer"
            onClick={() => toggleShowPassword()}
          />
        ) : (
          <FaRegEyeSlash
            size={20}
            className="text-gray-500 cursor-pointer"
            onClick={() => toggleShowPassword()}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default Password;
