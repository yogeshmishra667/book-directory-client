import React from 'react';
import Header from '../components/header';

import { apiSlice } from '../features/apiSlice';
import BestSeller from './bestSeller';
import GetBook from './getBook';
import GetTopFive from './getTopFive';
import GetLatestBook from './latestBook';

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
      return <div>{book.title}</div>;
    });
  } else if (isError) {
    book = (
      <div className="alert alert-danger" role="alert">
        {isError}
      </div>
    );
  }

  return (
    <div className="row">
      {book}
      <GetBook />
      <br />
      <GetTopFive />
      <br />
      <GetLatestBook />
      <br />
      <BestSeller />
    </div>
  );
}
