import React from 'react';
import mainImg from '../assets/the-alchemist.jpeg';
import BookDetailsList from './bookDetailsList';

const BookDetails = () => {
  return (
    <div className="w-full h-full p-20 items-center">
      <div className="grid md:grid-cols-2 max-w-[1240px]">
        <div>
          <img src={mainImg} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold pt-8">The Alchemist</h1>
          <p className="pt-4">Rating</p>
          <div className="grid grid-cols-3 justify-start pt-4">
            <div>
              <p>Author</p>
              <p className="font-bold">Paulo Coelho</p>
            </div>
            <div>
              <p>Genre</p>
              <p className="font-bold">Fiction</p>
            </div>
            <div>
              <p>Language</p>
              <p className="font-bold">English</p>
            </div>
          </div>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
            porta sit magna sagittis non. Quis tellus ipsum nulla nibh volutpat.
            Posuere dui ullamcorper odio placerat ac vulputate. Dui egestas
            faucibus gravida neque eget.
          </p>
          <div className="grid md:grid-cols-2 items-center justify-around space-y-4">
            <p>
              <span className="font-bold">Price: </span>₹450/-
            </p>
            <button className="inline-block py-4">Buy Now</button>
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
              <p>874487548755</p>
              <p>12/11/2022</p>
              <p>Biography</p>
              <p>pdf</p>
              <p>English</p>
              <p>2387</p>
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
};

export default BookDetails;
