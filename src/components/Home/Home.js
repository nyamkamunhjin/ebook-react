import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import SearchFilter from '../SearchFilter/SearchFilter';

import testBooks from '../../test/book.json';
import BookAPI from '../../api/BookAPI';
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    BookAPI.getBooks().then(({ data }) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-4/12">
        <SearchFilter />
      </div>
      <div className="w-8/12 flex flex-row flex-wrap">
        {books &&
          books.map((item, index) => <BookCard key={index} book={item} />)}
        {/* <BookCard /> */}
      </div>
    </div>
  );
};

export default Home;
