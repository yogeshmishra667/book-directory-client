import React from 'react';

import { useGetBooksQuery } from '../features/apiSlice';
import GetBooks from './getBooks';
import Spinner from './spinner';

export default function MoreBooks() {
  let book;
  const { data, isFetching, isSuccess, isError } = useGetBooksQuery();
  if (isFetching) {
    book = <Spinner />;
  } else if (isSuccess) {
    book = (
      <div name="book" className="w-full h-full p-12 bg-gradient-to-r from-[#3B2667] to-[#BC78EC]">
        <div className="flex justify-center">
          <p className="text-4xl font-bold mb-12 text-gray-200">All Books</p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 mx-auto max-w-[1240px] bg">
          {data.data.book.map((book) => {
            return <GetBooks book={book} />;
          })}
        </div>
      </div>
    );
  } else if (isError) {
    book = (
      <div className="alert alert-danger" role="alert">
        {isError}
      </div>
    );
  }
  return <div className="row">{book}</div>;
}
