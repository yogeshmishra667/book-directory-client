import React, { useState, useEffect } from 'react';
import bookImg from '../assets/books2.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { useLoginUserMutation, useSignupUserMutation } from '../features/apiSlice';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [
    signupUser,
    {
      data: signupData,
      isLoading: signupIsLoading,
      isError: signupIsError,
      isSuccess: signupIsSuccess,
    },
  ] = useSignupUserMutation();

  const signupHandleSubmit = (event) => {
    // event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    signupUser({ name, email, password, confirmPassword });
  };
  useEffect(() => {
    if (signupIsSuccess) {
      navigate('/');
    }
  }, [signupIsSuccess]);

  return (
    <div className="flex h-screen max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow ">
      <div className="relative hidden h-full xl:block xl:w-1/2">
        <img className="absolute object-cover w-full h-auto" src={bookImg} alt="my book" />
      </div>
      <div className="flex items-center w-full xl:w-1/2 ">
        <div className="w-full p-8">
          <form method="post" action="#">
            <h1 className="text-2xl font-bold "> Register Your Account</h1>

            <div>
              <span className="text-sm text-gray-600">
                Already have an account?
                <span className="text-blue-500"></span>
                <Link to="/signin">
                  <span className="text-sm font-semibold text-gray-700">Sign in</span>
                </Link>
              </span>
            </div>

            <div className="mt-6 mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">
                Name
              </label>
              <input
                className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
              />
            </div>

            <div className="mt-6 mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="name">
                Email
              </label>
              <input
                className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email address"
                defaultValue={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mt-6 mb-6">
              <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="w-full h-10 px-3 py-2 mb-1 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Your password"
              />
            </div>

            <div className="mt-6 mb-6">
              <label
                className="block mb-2 text-sm font-semibold text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full h-10 px-3 py-2 mb-1 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                defaultValue={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm your password"
              />
              <a
                className="inline-block text-sm text-gray-600 align-baseline hover:text-gray-800"
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>

            <div className="flex w-full mt-8">
              <button
                className="w-full h-10 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => signupHandleSubmit()}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
