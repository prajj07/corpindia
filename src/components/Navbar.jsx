import React from "react";


const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">Navbar</div>
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Replace with your avatar URL
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-semibold">Prajwal</div> {/* Replace with dynamic name */}
          <div className="text-sm text-gray-200">prajwal@example.com</div> {/* Replace with dynamic email */}
        </div>
      </div>
  );
};

export default Navbar;
