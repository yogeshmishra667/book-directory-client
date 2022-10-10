import React from 'react';
import Header from '../components/header';
import { useGetBooksQuery } from '../features/apiSlice';
import GetBooks from './getBooks';
import Spinner from './spinner';

export default function HeroSec() {
  let book;
  const { data, isFetching, isSuccess, isError } = useGetBooksQuery();
  if (isFetching) {
    book = <Spinner />;
  } else if (isSuccess) {
    book = data.data.book.map((book) => {
      return <GetBooks book={book} />;
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
