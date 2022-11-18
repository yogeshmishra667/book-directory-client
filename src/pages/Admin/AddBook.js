import React from 'react';

const AddBook = () => {
  return (
    <div className="max-w-full mx-auto  flex rounded-lg shadow overflow-hidden ">
      <div className="w-full flex items-center xl:w-1/2 mx-auto ">
        <div className="p-8 w-full">
          <form method="post" action="#" onSubmit="return false">
            <h1 className=" text-2xl font-bold">Add Book</h1>
            <div></div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2 pt-8"
              for="file_input"
            >
              Book Cover
            </label>
            <input
              className="flex w-full text-sm text-gray-900 bg-gray-200 rounded border border-gray-300 cursor-pointer focus:outline-non  placeholder-gray-400 file:rounded file:border-0 file:font-semibold  file:text-[#2b2a2a] file:bg-[#A1CF6B] file:py-2 file:px-2"
              aria-described-by="file_input_help"
              id="file_input"
              type="file"
            />
            <p
              class="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              PNG, JPG or GIF (MAX. 500x500px).
            </p>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Title
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                placeholder="Book Title"
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Author
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Author Name"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                summary
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="summary"
                type="text"
                placeholder="Book Summary"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Price
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="price"
                type="text"
                placeholder="Book Price"
              />
            </div>

            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Category
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="category"
                type="text"
                placeholder="Book Category"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Publisher
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="publisher"
                type="text"
                placeholder="Book Publisher"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Pages
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="pages"
                type="text"
                placeholder="Book Pages"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Language
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="language"
                type="text"
                placeholder="Book Language"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                ISBN
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="isbn"
                type="text"
                placeholder="Book ISBN"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Published Date
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="publishedDate"
                type="text"
                placeholder="Book Published Date"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Sold Copies
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="soldCopies"
                type="text"
                placeholder="Book Sold Copies"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Format
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="format"
                type="text"
                placeholder="Book Format"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                genre
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="genre"
                type="text"
                placeholder="Book Genre"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Rating Average
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="ratingAverage"
                type="text"
                placeholder="Book Rating Average"
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Ratings Quantity
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="ratingsQuantity"
                type="text"
                placeholder="Book Ratings Quantity"
              />
            </div>

            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
