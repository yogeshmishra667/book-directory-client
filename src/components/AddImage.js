import React, { useState } from 'react';
import { getCookie } from '../utils/CookiesHelper';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';
const accessToken = 'Bearer ' + getCookie('user-token');

const AddImage = ({ book }) => {
  const [bookCover, setBookCover] = useState('');
  const saveBookPic = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('bookCover', bookCover);
    try {
      const { data } = await axios({
        method: 'patch',
        data: formData,
        url: `${BASE_URL}books/${book._id}`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: accessToken,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(data);
      console.log(error.response);
    }
  };
  return (
    <div class="items-center justify-center bg-grey-lighter">
      <form>
        <label class="flex items-center px-8 py-1 bg-[#A1CF6B] hover:bg-[#8d9f77] rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue text-white hover:text-white">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="text-base leading-normal ml-4">Select a file</span>
          <input
            type="file"
            class="hidden "
            accept="image/*"
            onChange={(event) => setBookCover(event.target.files[0])}
          />
        </label>
        <button onClick={saveBookPic}>Submit</button>
      </form>
    </div>
  );
};

export default AddImage;
