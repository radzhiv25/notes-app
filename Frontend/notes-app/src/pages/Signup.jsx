import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/Password";
import { validateEmail } from "../utils/helper";

export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if(!name){
      setError("Please enter your name")
      return
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email address.")
      return;
    }
    if(!password){
      setError("Please enter the password")
      return
    }
    setError("")
  }

  return (
    <div className="md:w-1/4 mx-auto border rounded-md mt-10 px-4 py-2">
      <h2 className="text-3xl font-semibold py-2 border-b mb-2">Signup</h2>
      <form
        onSubmit={handleSignup}
        className="space-y-3"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Enter email</label>
          <input
            type="text"
            placeholder="Ex. johndoe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 outline-none border rounded-md"
          />
        </div>
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
          Signup
        </button>
        <Link to="/login">
          <p className="my-2 text-center text-sm text-gray-500">
            Already have an account?
          </p>
        </Link>
      </form>
    </div>
  );
};
