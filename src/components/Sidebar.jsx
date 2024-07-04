import React from "react";
import { FaHome } from "react-icons/fa";
import { GiIndiaGate, GiNewspaper } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 fixed h-full px-4 py-4  left-0">
      <div className="my-4">
        <h1 className="text-3xl text-white font-semibold tracking-wide hover:tracking-wider transition-all duration-300">
          CORPINDA
        </h1>
    <div className='w-64 bg-blue-500 fixed h-full px-4 py-4 rounded-tr-3xl left-0'>
      <div className='my-4'>
        <h1 className='text-3xl text-white font-semibold'>CORPINDA</h1>
      </div>
      <div className="mt-4 text-white font-semibold tracking-wide hover:tracking-wider transition-all duration-500">
        <div className="mb-4 rounded hover:shadow hover:bg-blue-600 py-2">
          <Link to="/" className="flex items-center px-3">
            <FaHome className="w-6 h-6 mr-2" />
            Home
          </Link>
        </div>
        <div className="mb-4 rounded hover:shadow hover:bg-blue-600 py-2">
          <Link to="/india" className="flex items-center px-3">
            <GiIndiaGate className="w-6 h-6 mr-2" />
            India
          </Link>
        </div>
        <div className="mb-4 rounded hover:shadow hover:bg-blue-600 py-2">
          <Link to="/company" className="flex items-center px-3">
            <FaRegBuilding className="w-6 h-6 mr-2" />
            Company
          </Link>
        </div>
        <div className="mb-4 rounded hover:shadow hover:bg-blue-600 py-2">
          <Link to="/latest-news" className="flex items-center px-3">
            <GiNewspaper className="w-6 h-6 mr-2" />
            Latest News
          </Link>
        </div>
        <div className="flex flex-col justify-end fixed bottom-0 left-0 h-fdivl">
          <div className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <Link to="/about-us" className="px-3">
              <VscAccount className="inline-block w-6 h-6 mr-2 -mt-2" />
              About Us
            </Link>
          </div>
          <div className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
            <Link to="/logout" className="px-3">
              <IoLogOutOutline className="inline-block w-6 h-6 mr-2 -mt-2" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
