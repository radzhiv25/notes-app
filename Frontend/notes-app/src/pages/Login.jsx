import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/Password";
import { validateEmail } from "../utils/helper";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if(!password){
      setError("Please enter a valid password")
      return;
    }
    setError("");
  };
  return (
    <div className="md:w-1/4 w-3/4 mx-auto">
      <form
        onSubmit={handleLogin}
        className="p-4 border rounded-md mt-10 space-y-3"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Enter email</label>
          <input
            type="text"
            placeholder="Ex. johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 outline-none border rounded-md"
          />
        </div>
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-center text-red-500 text-xs py-1">{error}</p>}
        <button
          className="w-full mt-3 p-2 rounded-md bg-black text-white"
          type="submit"
        >
          Login
        </button>
        <Link to="/signup">
          <p className="my-2 text-center text-sm text-gray-500">
            Not registered yet?
          </p>
        </Link>
      </form>
    </div>
  );
};
