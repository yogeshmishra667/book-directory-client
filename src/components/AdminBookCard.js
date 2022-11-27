import React from 'react';
import mainImg from '../assets/ikigai.png';
import AddImage from './AddImage';
import DeleteBook from '../pages/delete';
import { useNavigate } from 'react-router-dom';
import { useDeleteBooksMutation } from '../features/apiSlice';
import Swal from 'sweetalert2';

const AdminBookCard = ({ book }) => {
  const navigate = useNavigate();
  const [deleteBooks, response] = useDeleteBooksMutation();

  return (
    <div className="flex mb-8">
      <div className="relative ml-4 md:ml-0 grid grid-cols-4 md:grid-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl  border border-white bg-white">
        <div className="hidden md:flex bg-white col-span-1 place-items-center">
          <img src={mainImg} alt="tailwind logo" className="rounded-xl w-[180px] h-[260px]" />
        </div>
        <div className="w-full bg-white space-y-2 p-3 col-span-3">
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Title:</span> {book.title}
          </p>
          <p className="md:text-base text-gray-500 text-base line-clamp-2">
            <span className="font-bold text-gray-800">Summary:</span> {book.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-4 ">
            <div className="col-span-1 ">
              <p className="md:text-base text-gray-500 text-base ">
                <span className="font-bold text-gray-800">Author:</span> {book.Author}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Genre:</span> {book.genre}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Publisher:</span> {book.publisher}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">ISBN:</span> {book.ISBN}
              </p>
            </div>
            <div className="col-span-1">
              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Pages:</span> {book.pageCount}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Language:</span> {book.language}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Published:</span> {book.publishedDate}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Edition:</span> 1
              </p>
            </div>
            <div className="col-span-1">
              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Price:</span> {book.price}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Quantity:</span> {book.soldCopies}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Rating:</span> {book.ratingsAverage}
              </p>

              <p className="md:text-base text-gray-500 text-base">
                <span className="font-bold text-gray-800">Reviews:</span> 100
              </p>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <AddImage />
            <button className="px-8 bg-[#A1CF6B] hover:bg-[#8d9f77] hover:text-[#ffffff] border-none text-white font-bold py-2  rounded">
              Update
            </button>
            <button
              onClick={() => {
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!',
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteBooks(book._id).then(() => navigate('/'));
                    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                  } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                  ) {
                    Swal.fire('Cancelled', 'Your imaginary books is safe :)', 'error');
                  }
                });
              }}
              disabled={response.isLoading}
              className="mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded"
            >
              {response.isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookCard;
