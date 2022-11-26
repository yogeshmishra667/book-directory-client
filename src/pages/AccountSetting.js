import React, { useEffect, useState } from 'react';
import { useUpdateMeMutation } from '../features/apiSlice';
import FetchAPIData from '../utils/FetchAPIData';
import { getCookie, setCookie } from '../utils/CookiesHelper';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';
const accessToken = 'Bearer ' + getCookie('user-token');

const UserSetting = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [AdminData, setAdminData] = useState(null);
  //const [updateMe, { data, isLoading, isSuccess }] = useUpdateMeMutation();

  const updateMeData = async () => {
    await FetchAPIData('users/updateMe', 'patch', { email, name });
    // setCookie('user-token', 'loggedout');
    // window.location.href = '/';
    //updateMe({ email, password, photo });
  };
  const updatePassword = async () => {
    await FetchAPIData('users/updateMyPassword', 'patch', {
      passwordCurrent,
      password,
      confirmPassword,
    });
  };
  //console.log(AdminData);

  const saveProfilePic = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', photo);
    try {
      const { data } = await axios({
        method: 'patch',
        data: formData,
        url: `${BASE_URL}users/updateMe`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: accessToken,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="w-full flex items-center xl:w-1/2 ">
        <div className="p-8 w-full">
          <p className="text-3xl mb-8">Your Account Setting</p>

          <form method="post" action="#" onSubmit="return false">
            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                name
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="flex w-full mt-10 justify-end">
              <button
                className=" bg-[#A1CF6B] text-[#2b2a2a] hover:text-black-200 border-none text-sm py-2 px-5 font-semibold rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => updateMeData()}
              >
                Save Setting
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Change Profile Picture */}
      <div className="w-full flex items-center xl:w-1/2 ">
        <div className="p-8 w-full">
          <p className="text-3xl mb-8">Change Profile Picture</p>
          <form>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              for="file_input"
            >
              Upload Profile Picture
            </label>
            <input
              className="flex w-full text-sm text-gray-900 bg-gray-200 rounded border border-gray-300 cursor-pointer focus:outline-non  placeholder-gray-400 file:rounded file:border-0 file:font-semibold  file:text-[#2b2a2a] file:bg-[#A1CF6B] file:py-2 file:px-2"
              aria-described-by="file_input_help"
              id="file_input"
              type="file"
              accept="image/*"
              onChange={(event) => setPhoto(event.target.files[0])}
            />
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
              PNG, JPG or GIF (MAX. 500x500px).
            </p>
            <div className="flex w-full mt-10 justify-end">
              <button
                className=" bg-[#A1CF6B] text-[#2b2a2a] hover:text-black-200 border-none text-sm py-2 px-5 font-semibold rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={saveProfilePic}
              >
                Save Picture
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* 3 */}
      <div className="w-full flex items-center xl:w-1/2 ">
        <div className="p-8 w-full">
          <p className="text-3xl mb-8">Change Password</p>
          <form method="post" action="#" onSubmit="return false">
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="currentPassword"
              >
                CurrentPassword
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="currentPassword"
                type="password"
                placeholder="Your current password"
                value={passwordCurrent}
                onChange={(event) => setPasswordCurrent(event.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div className="flex w-full mt-10 justify-end">
              <button
                className=" bg-[#A1CF6B] text-[#2b2a2a] hover:text-black-200 border-none text-sm py-2 px-5 font-semibold rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => updatePassword()}
              >
                Save Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
