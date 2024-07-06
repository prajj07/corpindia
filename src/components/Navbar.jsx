import React from "react";

const Navbar = ({ name, email, avatarUrl }) => {
  return (
    <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">Navbar</div>
      <div className="flex items-center space-x-4">
        <img
          src={avatarUrl || "https://via.placeholder.com/40"} // Default avatar URL if not provided
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-200">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
