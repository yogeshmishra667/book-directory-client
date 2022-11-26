import React, { useState } from 'react';
import FetchAPIData from './../../utils/FetchAPIData';
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [ISBN, setISBN] = useState('');
  const [publisher, setPublisher] = useState('');
  const [price, setPrice] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [format, setFormat] = useState('');
  const [ratingsAverage, setRatingsAverage] = useState('');
  const [ratingsQuantity, setRatingsQuantity] = useState('');
  const [soldCopies, setSoldCopies] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [language, setLanguage] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = async () => {
    await FetchAPIData('books', 'post', {
      title,
      Author,
      summary,
      ISBN,
      publisher,
      price,
      publishedDate,
      format,
      ratingsAverage,
      soldCopies,
      pageCount,
      language,
      genre,
    });
    window.location.href = '/';
  };

  return (
    <div className="max-w-full mx-auto  flex rounded-lg shadow overflow-hidden ">
      <div className="w-full flex items-center xl:w-1/2 mx-auto ">
        <div className="p-8 w-full">
          <form method="post" action="#" onSubmit="return false">
            <h1 className=" text-2xl font-bold">Add Book</h1>

            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Title
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="title"
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Author
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="author"
                type="text"
                placeholder="Author Name"
                value={Author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">summary</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="summary"
                type="text"
                placeholder="Book Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Price</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="price"
                type="text"
                placeholder="Book Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Publisher</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="publisher"
                type="text"
                placeholder="Book Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Pages</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="pages"
                type="text"
                placeholder="Book Pages"
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Language</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="language"
                type="text"
                placeholder="Book Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">ISBN</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="isbn"
                type="text"
                placeholder="Book ISBN"
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
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
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Sold Copies</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="soldCopies"
                type="text"
                placeholder="Book Sold Copies"
                value={soldCopies}
                onChange={(e) => setSoldCopies(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Format</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="format"
                type="text"
                placeholder="Book Format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">genre</label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="genre"
                type="text"
                placeholder="Book Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
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
                value={ratingsAverage}
                onChange={(e) => setRatingsAverage(e.target.value)}
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
                value={ratingsQuantity}
                onChange={(e) => setRatingsQuantity(e.target.value)}
              />
            </div>

            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={() => handleAddBook()}
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
