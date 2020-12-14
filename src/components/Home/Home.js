import React from 'react';

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="flex">
      <div className="w-4/12 min-h-full bg-green-400">
        <div className="mb-4 m-5">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Search
          </label>
          <div className="flex flex-row items-center">
            <input
              className="border border-gray-400 appearance-none rounded w-full p-2 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
              type="text"
              placeholder="Harry Potter"
            />
            <button className="btn-indigo m-2">Search</button>
          </div>
        </div>
      </div>
      <div className="w-8/12 min-h-full bg-purple-500"></div>
    </div>
  );
};

export default Home;
