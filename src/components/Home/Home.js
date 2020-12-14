import React from 'react';
import BookCard from '../BookCard/BookCard';
import SearchFilter from '../SearchFilter/SearchFilter';

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="flex">
      <div className="w-4/12 bg-green-400">
        <SearchFilter />
      </div>
      <div className="w-8/12 bg-purple-500 flex flex-row flex-wrap">
        {Array.from(Array(15)).map((item) => (
          <BookCard />
        ))}
        {/* <BookCard /> */}
      </div>
    </div>
  );
};

export default Home;
