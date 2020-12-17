import axios from 'axios';
import resolver from './resolver';

const getBooks = async () => {
  return await resolver(
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/book`)
      .then((res) => res.data)
  );
};

const getBookById = async (id) => {
  return await resolver(
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/book/${id}`)
      .then((res) => res.data)
  );
};

const addBook = async (data, token) => {
  return await resolver(
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/book/add`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
  );
};

export default { getBooks, addBook, getBookById };
