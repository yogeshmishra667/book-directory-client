import React from 'react';
import mainImg from '../assets/the-alchemist.jpeg';
import { useParams } from 'react-router-dom';
import { apiSlice } from '../features/apiSlice';
import Spinner from '../pages/spinner';
import PayButton from '../pages/payButton';

const BookDetails = () => {
  let book;
  let { id } = useParams();
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetBookQuery(id);
  // const bookData = data.data.book;

  if (isFetching) {
    book = <Spinner />;
  } else if (isSuccess) {
    return (
      <div className="w-full h-full p-20 items-center">
        <div className="grid md:grid-cols-2 max-w-[1240px]">
          <div>
            <img src={mainImg} alt="" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold pt-8">{data.data.book.title}</h1>
            <p className="pt-4">Rating</p>
            <div className="grid grid-cols-3 justify-start pt-4">
              <div>
                <p>Author</p>
                <p className="font-bold">{data.data.book.Author}</p>
              </div>
              <div>
                <p>Genre</p>
                <p className="font-bold">{data.data.book.genre}</p>
              </div>
              <div>
                <p>Language</p>
                <p className="font-bold">{data.data.book.language}</p>
              </div>
            </div>
            <p className="py-4 line-clamp-9">{data.data.book.summary}</p>
            <div className="grid md:grid-cols-2 items-center justify-around space-y-4">
              <p>
                <span className="font-bold">Price: </span>₹{data.data.book.price}/-
              </p>
              <PayButton book={data.data.book} />
            </div>
          </div>
        </div>
        {/* second part */}
        <div className=" grid md:grid-cols-2 gap-20 max-w-[1240px] pt-20">
          <div className="space-y-4">
            <p className="text-2xl font-bold">Book Details</p>
            <div className="grid grid-cols-2">
              <div className="leading-10">
                <p className="">ISBN </p>
                <p>Published Date</p>
                <p>Genre</p>
                <p>Format</p>
                <p>language</p>
                <p>Sold copy</p>
              </div>
              <div className="leading-10">
                <p>{data.data.book.ISBN}</p>
                <p>{data.data.book.publishedDate}</p>
                <p>{data.data.book.genre}</p>
                <p>{data.data.book.format}</p>
                <p>{data.data.book.language}</p>
                <p>{data.data.book.soldCopies}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-2xl font-bold">Related Books</p>
            <div className="grid md:grid-cols-2 ">
              <div>
                <img src={mainImg} alt="" className="w-[140px] h-[210px]" />
              </div>
              <div className="leading-8">
                <p>Title:The Alchemist</p>
                <p>Author: yogesh</p>
                <p>Price: 300</p>
                <button className="px-3 mt-4">Read more</button>
              </div>
            </div>
          </div>
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
};

export default BookDetails;
