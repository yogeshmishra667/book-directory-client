import React from 'react';
import { apiSlice } from '../features/apiSlice';

export default function GetBook() {
  const { data } = apiSlice.useGetBookQuery('632ae11690f2ab52c582e3b1');
  return (
    <>
      <br />
      <h5>{data.data.book.title}</h5>
      <p>{data.data.book.Author}</p>
      <p>{data.data.book.publishedDate}</p>
      <p>{data.data.book.summary}</p>
    </>
  );
}
