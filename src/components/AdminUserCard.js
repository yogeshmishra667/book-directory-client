import React from 'react';
import mainImg from '../assets/7787957.jpg';

const AdminUserCard = ({ user }) => {
  return (
    <div className="flex mb-8">
      <div className="relative ml-4 md:ml-0 grid grid-cols-4 md:grid-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl  border border-white bg-white">
        <div className="hidden md:flex bg-white col-span-1 place-items-center">
          <img src={mainImg} alt="tailwind logo" className="rounded-xl w-[180px] h-[260px]" />
        </div>
        <div className="w-full bg-white space-y-2 p-3 col-span-3">
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Name:</span> {user.name}
          </p>
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Email:</span> {user.email}
          </p>
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Password Change At: </span>
            {user.passwordChangedAt}
          </p>
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Password Reset Expires: </span>
            {user.passwordResetExpires}
          </p>
          <p className="md:text-base text-gray-500 text-base">
            <span className="font-bold text-gray-800">Role:</span> {user.role}
          </p>

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
  );
};

export default AdminUserCard;
