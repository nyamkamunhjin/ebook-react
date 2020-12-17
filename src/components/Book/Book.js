import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookAPI from '../../api/BookAPI';
import testBooks from '../../test/book.json';
import { formatDate } from '../../functions';
/**
 * @author
 * @function Book
 **/

const Book = (props) => {
  let { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    BookAPI.getBookById(id).then(({ data }) => {
      console.log(data);
      setBook(data);
    });
  }, [id]);

  return (
    <div className="flex justify-center">
      {book && (
        <div className=" w-full m-1 md:w-9/12 lg:w-5/12 flex flex-row">
          <div className=" w-6/12 p-2">
            <img
              className="object-cover w-full border border-gray-700"
              src={book.book_cover_image}
              alt="book-cover"
            />
            <p className="text-3xl text-left flex-grow">
              <b>{book.price}₮</b>
            </p>
          </div>
          <div className="w-6/12 flex flex-col items-start p-2">
            <div className="flex flex-row justify-center items-end">
              <p className="text-4xl">{book.book_name}</p>
              <p className="text-base mx-2">
                ({formatDate(book.published_date)})
              </p>
            </div>
            <p className="text-2xl">{book.author}</p>
            <p className="text-base">{book.category}</p>
            <hr className="border border-gray-700 text-center text-2xl w-full" />
            <p className="text-base text-justify">{book.description}</p>
            <button className="btn-indigo w-full my-4 ">Худалдан авах</button>
            <button className="btn-indigo w-full my-4 ">Wish List</button>
            <button className="btn-indigo w-full my-4 ">Preview</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
