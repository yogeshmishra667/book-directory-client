import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

import { apiSlice, useDeleteBooksMutation, useGetBooksQuery } from '../features/apiSlice';

export default function HeroSec() {
  let book;
  const navigate = useNavigate();
  const { data, isFetching, isSuccess, isError } = useGetBooksQuery();
  const [deleteBooks, response] = useDeleteBooksMutation();
  console.log(response);
  if (isFetching) {
    book = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess) {
    book = data.data.book.map((book) => {
      return (
        <div className="float-right m-7  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200&q=80"
              alt=""
            />
            <span class="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {book.Author}
            </span>
            <span class="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {book.publisher}
            </span>
            <span class="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {book.price}
            </span>
            <span class="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {book.genre}
            </span>
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.summary}</p>
            <Link to={book._id}>
              <button className=" mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded">
                read more
              </button>
            </Link>
            <button className="mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded">
              update
            </button>
            <button
              onClick={() => deleteBooks(book._id).then(() => navigate('/'))}
              disabled={response.isLoading}
              className="mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded"
            >
              {response.isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      );
    });
  } else if (isError) {
    book = (
      <div className="alert alert-danger" role="alert">
        {isError}
      </div>
    );
  }
  return <div className="row">{book}</div>;
}
