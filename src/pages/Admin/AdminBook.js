import React from 'react';
import mainImg from '../../assets/ikigai.jpeg';
const AdminBook = () => {
  return (
    <>
      <div className="flex mb-8">
        <div className="relative ml-4 md:ml-0 grid grid-cols-4 md:grid-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl  border border-white bg-white">
          <div className="hidden md:flex bg-white col-span-1 place-items-center">
            <img
              src={mainImg}
              alt="tailwind logo"
              className="rounded-xl w-[180px] h-[260px]"
            />
          </div>
          <div className="w-full bg-white space-y-2 p-3 col-span-3">
            <p className="md:text-base text-gray-500 text-base">
              <span className="font-bold text-gray-800">Title:</span> The
              Alchemist
            </p>
            <p className="md:text-base text-gray-500 text-base">
              <span className="font-bold text-gray-800">Summary:</span> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Mauris, porta
              sit magna sagittis non. Quis tellus ipsum nulla nibh volutpat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 pt-4 ">
              <div className="col-span-1 ">
                <p className="md:text-base text-gray-500 text-base ">
                  <span className="font-bold text-gray-800">Author:</span> Paulo
                  Coelho
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Genre:</span>{' '}
                  Fiction
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Publisher:</span>{' '}
                  Harper Collins
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">ISBN:</span>{' '}
                  9780062315007
                </p>
              </div>
              <div className="col-span-1">
                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Pages:</span> 197
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Language:</span>{' '}
                  English
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Published:</span>{' '}
                  2014-10-07
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Edition:</span> 1
                </p>
              </div>
              <div className="col-span-1">
                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Price:</span> 200
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Quantity:</span> 10
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Rating:</span> 4.5
                </p>

                <p className="md:text-base text-gray-500 text-base">
                  <span className="font-bold text-gray-800">Reviews:</span> 100
                </p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <button className="px-8 bg-[#A1CF6B] hover:bg-[#8d9f77] hover:text-[#ffffff] border-none text-white font-bold py-2  rounded">
                Update
              </button>
              <button className="px-8 bg-[#A1CF6B] hover:bg-[#8d9f77] hover:text-[#ffffff] border-none text-white font-bold py-2 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBook;
