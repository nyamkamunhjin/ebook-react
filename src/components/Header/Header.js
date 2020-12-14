import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <nav className="h-50 flex flex-row items-center bg-indigo-100">
      <div>
        <ul className="flex flex-row">
          <li className="mx-5 hover:text-indigo-600 active:text-indigo-600">
            <Link to="/">Home Page</Link>
          </li>
          <li className="mx-5 hover:text-indigo-600 active:text-indigo-600">
            <Link to="/about">About us</Link>
          </li>
          <li className="mx-5 hover:text-indigo-600 active:text-indigo-600">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="group ml-auto p-5 border rounded-xl border-opacity-50 m-5 border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
        <div className="mb-4">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Username
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 mt-1 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Password
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 mt-1 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn-indigo">Login</button>
      </div>
    </nav>
  );
};

export default Header;
