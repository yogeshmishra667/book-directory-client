import React, { useState, useEffect } from 'react';
import bookImg from '../assets/books2.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { useLoginUserMutation } from '../features/apiSlice';
import { setCookie } from '../utils/CookiesHelper';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [loginUser, { data, isLoading, isError, isSuccess }] = useLoginUserMutation();

  const handleLoginSubmit = async () => {
    if (email && password) {
      const data = await loginUser({ email, password });
      setCookie('user-token', data.data.token);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      console.log('login successful');
    }
  }, [isSuccess]);

  return (
    <div className="max-w-full mx-auto h-screen flex bg-white rounded-lg shadow overflow-hidden ">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
        <img className="absolute h-auto w-full object-cover" src={bookImg} alt="my book" />
      </div>
      <div className="w-full flex items-center xl:w-1/2 ">
        <div className="p-8 w-full">
          <form method="post" action="#" onSubmit="return false">
            <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm">Don't have an account?</span>
              <span className="text-gray-700 text-sm font-semibold">Sign up</span>
            </div>
            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
              <a
                className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={() => handleLoginSubmit()}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
