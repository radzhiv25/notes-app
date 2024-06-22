import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({value, onChange, handleSearch, onClearSearch}) => {
  return (
    <div className="md:w-2/3 w-full mx-auto bg-gray-200 rounded-md flex items-center justify-between pr-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="p-2 w-full outline-none rounded-md bg-transparent"
        placeholder="Search Notes"
      />
      <CiSearch className="size-5 text-gray-500 hover:text-black cursor-pointer"/>
    </div>
  );
};

export default Search;
