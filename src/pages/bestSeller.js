import React from 'react';
import Header from '../components/header';

import { apiSlice } from '../features/apiSlice';

export default function BestSeller() {
  let book;
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetBestSellerBooksQuery();
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

  return <div className="row">{book}</div>;
}
