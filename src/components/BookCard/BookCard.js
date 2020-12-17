import React from 'react';
import { Link, useHistory } from 'react-router-dom';

/**
 * @author
 * @function BookCard
 **/

const BookCard = ({ book, ...props }) => {
  let history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div className="w-56 bg-indigo-100 m-4 p-1 flex-grow rounded shadow-lg transition transform hover:scale-105">
      <div
        className="bg-indigo-300 h-72 overflow-hidden"
        onClick={() => redirect(`/book/${book.book_id.$oid}`)}
      >
        <img
          className="object-cover w-full h-72"
          src={book.book_cover_image}
          alt="book-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-indigo-500">{book.book_name}</p>

        <p className="text-2xl text-indigo-500 font-bold">{book.price}₮</p>
      </div>
    </div>
  );
};

export default BookCard;
