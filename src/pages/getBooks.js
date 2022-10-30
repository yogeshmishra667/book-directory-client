import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDeleteBooksMutation } from '../features/apiSlice';
import Swal from 'sweetalert2';

const GetBooks = ({ book }) => {
  console.log(book);
  const navigate = useNavigate();
  const [deleteBooks, response] = useDeleteBooksMutation();
  return (
    <div name="book" className="flex">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img
            className="rounded-t-lg"
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200&q=80"
            alt=""
          />
          <span className="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {book.Author}
          </span>
          <span className="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {book.publisher}
          </span>
          <span className="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {book.price}
          </span>
          <span className="bg-bermuda text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {book.genre}
          </span>
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.summary}</p>
          <Link to={book._id}>
            <button className=" mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded">
              read more
            </button>
          </Link>
          <button className="mx-2 bg-bermuda border hover:bg-blue-700py-2 px-4 rounded">
            update
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
                  Swal.fire('Deleted!', 'Your books has been deleted.', 'success');
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
  );
};

export default GetBooks;
