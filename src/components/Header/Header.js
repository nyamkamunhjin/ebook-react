import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import context from '../../context/context';

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  let history = useHistory();

  const { user, logOut } = useContext(context);
  const redirect = (path) => {
    history.push(path);
  };

  return (
    <nav className="py-2 flex flex-row items-center bg-indigo-100 w-full">
      <ul className="flex flex-row items-center my-3">
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
      {user ? (
        <button className="btn-indigo ml-auto mr-4" onClick={() => logOut()}>
          Logout
        </button>
      ) : (
        <button
          className="btn-indigo ml-auto mr-4"
          onClick={() => redirect('/login')}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Header;
