import React from 'react';

/**
 * @author
 * @function SearchFilter
 **/

const SearchFilter = (props) => {
  return (
    <React.Fragment>
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
      <div className="mb-4 m-5 flex flex-row">
        <div className="flex flex-col mr-2">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Min
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="number"
            placeholder="Min"
          />
        </div>
        <div className="flex flex-col ml-2">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Max
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="number"
            placeholder="Max"
          />
        </div>
      </div>
      <div className="mb-4 m-5 flex flex-row">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className="mb-4 m-5 flex flex-row">
        <div className="flex flex-col ">
          <label className="block text-sm text-indigo-500 font-bold text-left group-hover:text-indigo-800">
            Upload Date
          </label>
          <input
            className="border border-gray-400 appearance-none rounded w-full p-2 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
            type="date"
            placeholder="Date"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchFilter;
