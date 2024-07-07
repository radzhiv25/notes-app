import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Search from "./Search";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate;

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearch("");
  };
  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="pt-5 py-2 border-b flex md:flex-row flex-col md:items-center justify-between ">
      <div className="flex md:flex-row flex-col md:items-center justify-between w-full gap-5 mr-5">
        <div className="">
          <Link to="/">
            <h1 className="text-3xl font-semibold text-slate-600">Notez</h1>
            <p className="text-xs text-gray-500">
              Simpligying your note taking
            </p>
          </Link>
        </div>
        <Search
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>
      <div className="md:mt-0 mt-2 flex items-center justify-between space-x-3">
        <ul className="flex space-x-3">
          <li className="border p-2 rounded-md">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2 border rounded-md">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <Profile onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;
