import React, { useEffect } from 'react';
import {
  Cog6ToothIcon,
  BookOpenIcon,
  UsersIcon,
  BanknotesIcon,
  ArrowLeftOnRectangleIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import AccountSetting from './AccountSetting';
import { Link } from 'react-router-dom';
import { setCookie } from '../utils/CookiesHelper';
import FetchAPIData from '../utils/FetchAPIData';
import AdminUserCard from './../components/AdminUserCard';

const baseURLImg = `http://localhost:3000/img/users`;
const Setting = ({ userData }) => {
  const logoutUser = async () => {
    await FetchAPIData('users/logout', 'get');
    setCookie('user-token', 'loggedout');
    window.location.href = '/';
  };

  //const userDataRaw = await FetchAPIData('users/getUserData', 'get');
  // console.log(userData.photo);
  return (
    <div className="w-full flex flex-col h-full mx-auto ">
      <div className="grid grid-cols-5">
        <div className="bg-[#D9D9D9] h-screen self-start sticky top-0 col-span-1">
          <div className="flex justify-center mt-8 mb-4 font-bold">Yo-Books</div>
          <ul>
            <li>
              <div className="flex items-center justify-evenly md:justify-start">
                <span className="">
                  <Cog6ToothIcon className="w-8 md:w-5" />
                </span>
                <p className="ml-3 hidden md:flex">Setting</p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-evenly md:justify-start">
                <span className="">
                  <BookOpenIcon className="w-8 md:w-5" />
                </span>
                <p className="ml-3 hidden md:flex">My Books</p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-evenly md:justify-start">
                <span className="">
                  <BanknotesIcon className="w-8 md:w-5" />
                </span>
                <p className="ml-3 hidden md:flex">Billing</p>
              </div>
            </li>
            {userData?.role == 'admin' && (
              <>
                <h1 className=" flex justify-center my-4 font-bold">Admin</h1>
                <li>
                  <div className="flex items-center justify-evenly md:justify-start">
                    <span className="">
                      <BookOpenIcon className="w-8 md:w-5" />
                    </span>
                    <Link to="/admin/manageBooks">
                      <p className="ml-3 hidden md:flex">Manage Books</p>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-evenly md:justify-start">
                    <span className="">
                      <UsersIcon className="w-8 md:w-5" />
                    </span>
                    <Link to="/admin/manageUsers">
                      <p className="ml-3 hidden md:flex">Manage Users</p>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-evenly md:justify-start">
                    <span className="">
                      <BookOpenIcon className="w-8 md:w-5" />
                    </span>
                    <Link to="/admin/addBook">
                      <p className="ml-3 hidden md:flex">Add Books</p>
                    </Link>
                  </div>
                </li>
              </>
            )}
          </ul>
          <div className="flex items-end justify-center h-[46%] ">
            <div className=" p-4 mt-12">
              <div className="w-16 h-16 rounded-full bg-slate-500 mb-5">
                <img className="rounded" src={`${baseURLImg}/${userData?.photo}`} />
              </div>
              <p className="hidden md:flex">{userData.name}</p>

              <div className="flex items-center justify-evenly md:justify-start my-4">
                <button
                  onClick={() => logoutUser()}
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 flex justify-center mx-auto mt-16">
          <div className="w-[1000px]">
            <AccountSetting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

//  <nav className="flex justify-between">
//    <p className="text-3xl">Your Account Setting</p>
//    <button className="px-5 bg-[#A1CF6B] border-[#A1CF6B] font-semibold text-[#2b2a2a]">
//      Add More +
//    </button>
//  </nav>;
