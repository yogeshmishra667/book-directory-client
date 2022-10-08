import React from 'react';
import Header from '../components/header';
import { Link } from 'react-router-dom';

import { apiSlice } from '../features/apiSlice';

export default function HeroSec() {
  let book;
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetBooksQuery();

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
        <div>
          <Link to={book._id}>{book.title}</Link>
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
