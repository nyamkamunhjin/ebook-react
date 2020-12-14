import React from 'react';

/**
 * @author
 * @function BookCard
 **/

const BookCard = (props) => {
  return (
    <div className="w-56 bg-indigo-100 m-4 p-1 flex-grow rounded shadow-lg transition transform hover:scale-105">
      <div className="bg-indigo-300 h-72 overflow-hidden">
        <img
          className="object-cover w-full h-72"
          src={
            Math.random() * 100 > 50
              ? 'https://nypost.com/wp-content/uploads/sites/2/2020/06/spongebob-gay-1.jpg?quality=80&strip=all'
              : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105'
          }
          alt="book-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-indigo-500">Spongebob</p>

        <p className="text-2xl text-indigo-500 font-bold">31.99$</p>
      </div>
    </div>
  );
};

export default BookCard;
