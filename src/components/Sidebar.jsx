import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GiIndiaGate, GiNewspaper } from 'react-icons/gi';
import { FaRegBuilding } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { IoLogOutOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-58 bg-blue-500 fixed h-full px-5 ml-[-20px] py-2 rounded-tr-3xl rounded-br-3xl'>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>CORPINDA</h1>
      </div>
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/" className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />
            Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/india" className='px-3'>
            <GiIndiaGate className='inline-block w-6 h-6 mr-2 -mt-2' />
            India
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/company" className='px-3'>
            <FaRegBuilding className='inline-block w-6 h-6 mr-2 -mt-2' />
            Company
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <Link to="/latest-news" className='px-3'>
            <GiNewspaper className='inline-block w-6 h-6 mr-2 -mt-2' />
            Latest News
          </Link>
        </li>
        <div className="flex flex-col justify-end fixed bottom-0 left-0 h-full">
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/about-us" className='px-3'>
              <VscAccount className='inline-block w-6 h-6 mr-2 -mt-2' />
              About Us
            </Link>
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <Link to="/logout" className='px-3'>
              <IoLogOutOutline className='inline-block w-6 h-6 mr-2 -mt-2' />
              Logout
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
