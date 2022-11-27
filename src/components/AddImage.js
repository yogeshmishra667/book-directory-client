import React from 'react';

const AddImage = () => {
  return (
    <div class="items-center justify-center bg-grey-lighter">
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
        <input type="file" class="hidden" />
      </label>
    </div>
  );
};

export default AddImage;
