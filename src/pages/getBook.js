import React from 'react';
import { useParams } from 'react-router-dom';
import { apiSlice } from '../features/apiSlice';
import Spinner from './spinner';

export default function GetBook() {
  let book;
  let { id } = useParams();
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetBookQuery(id);
  //console.log(data);
  //console.log(`the yogesh ${id}`);

  if (isFetching) {
    book = <Spinner />;
  } else if (isSuccess) {
    return (
      <div>
        <h5>{data.data.book.title}</h5>
        <p>{data.data.book.Author}</p>
        <p>{data.data.book.publishedDate}</p>
        <p>{data.data.book.summary}</p>
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
