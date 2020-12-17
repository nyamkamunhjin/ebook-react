import React from 'react';

/**
 * @author
 * @function ConsumerPage
 **/

const ConsumerPage = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row m-2.5 w-full lg:w-7/12">
        <div className="w-5/12  flex flex-col items-center border-0 border-r-2">
          <div className="p-2 w-2/4">
            <img
              className="object-cover w-full border border-gray-700"
              src={'https://www.flaticon.com/svg/static/icons/svg/21/21104.svg'}
              alt="user-profile"
            />
          </div>
          <div className="w-3/4 flex flex-col items-start">
            <p className="">First Name</p>
            <p className="">Last Name</p>
            <p className="">Email</p>
            <p className="">Phone Number</p>
            <p className="">Address</p>
          </div>
          <button className="btn-indigo mx-1">Change</button>
        </div>
        <div className="w-7/12  p-2">
          <div className="flex flex-row m-1.5">
            <button className="btn-indigo mx-1">My books</button>
            <button className="btn-indigo mx-1">My books</button>
            <div className="flex flex-row items-center ml-auto">
              <input
                className="border border-gray-400 appearance-none rounded w-full p-2 focus:border-indigo-600 focus: outline-none active:border-indigo-600"
                type="text"
                placeholder="Harry Potter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerPage;
