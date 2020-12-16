import React from 'react';
import BookCard from '../BookCard/BookCard';
import SearchFilter from '../SearchFilter/SearchFilter';

import testBooks from '../../test/book.json';
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <div className="flex">
      <div className="w-4/12">
        <SearchFilter />
      </div>
      <div className="w-8/12 flex flex-row flex-wrap">
        {testBooks.slice(0, 20).map((item, index) => (
          <BookCard key={index} book={item} />
        ))}
        {/* <BookCard /> */}
      </div>
    </div>
  );
};

export default Home;
