import React, { useContext, useRef } from 'react';
import UserAPI from '../../api/UserAPI';
import context from '../../context/context';

/**
 * @author
 * @function Login
 **/

const Login = (props) => {
  const emailElRef = useRef('');
  const passwordElRef = useRef('');

  const { logIn } = useContext(context);

  const handleLogin = async () => {
    const { data, err } = await UserAPI.signIn({
      email: emailElRef.current.value,
      password: passwordElRef.current.value,
    });

    if (err) {
      console.error(err);
    } else {
      if (data) {
        logIn(data);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-200">
      <div className="group w-full md:w-5/12 lg:w-3/12 p-5 border rounded-xl border-opacity-50 m-5 border-indigo-500 transition-all hover:bg-white hover:shadow-lg hover:border-transparent">
        <div className="mb-4">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Username
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 mt-1 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="text"
            placeholder="Username"
            ref={emailElRef}
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
            ref={passwordElRef}
          />
        </div>
        <button className="btn-indigo" onClick={() => handleLogin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
