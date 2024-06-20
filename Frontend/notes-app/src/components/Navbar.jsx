import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-10 pt-5 py-2 border-b flex items-center justify-between">
      <div className="">
        <Link to="/home">
        <h1 className="text-3xl font-semibold text-slate-600">Notez</h1>
        <p className="text-xs text-gray-500">Simpligying your note taking</p>
        </Link>
      </div>
      <ul className="flex space-x-3">
        <li className="border p-2 rounded-md">
          <Link to="/login">
          Login
          </Link>
        </li>
        <li className="p-2 border rounded-md">
        <Link to="/signup">
          Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
