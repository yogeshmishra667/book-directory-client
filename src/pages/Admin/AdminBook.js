import React from 'react';
import { useGetBooksQuery } from '../../features/apiSlice';
import Spinner from '../../pages/spinner';

import AdminBookCard from '../../components/AdminBookCard';
const AdminBook = () => {
  let book;
  const { data, isFetching, isSuccess, isError } = useGetBooksQuery();
  if (isFetching) {
    book = <Spinner />;
  } else if (isSuccess) {
    book = data.data.book.map((book) => {
      return <AdminBookCard book={book} />;
    });
  }
  return <div className="row">{book}</div>;
};

export default AdminBook;
