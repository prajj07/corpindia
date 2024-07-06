import React from "react";

const Navbar = ({ name, email, avatarUrl }) => {
  return (
    <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold"></div>
      <div className="flex items-center space-x-4">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-200">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
