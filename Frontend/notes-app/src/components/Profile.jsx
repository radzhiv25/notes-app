import React from "react";
import { getInitials } from "../utils/helper";

const Profile = ({ onLogout }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="size-10 text-center p-2 bg-slate-500 rounded-full text-white">
        {getInitials("Radzhiv Krishna")}
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Radzhiv</p>
        <button onClick={onLogout} className="text-xs text-right">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
