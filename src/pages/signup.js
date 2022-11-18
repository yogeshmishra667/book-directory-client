import React, { useState, useEffect } from 'react';
import bookImg from '../assets/books2.jpg';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation, useSignupUserMutation } from '../features/apiSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;
  const [showRegister, setShowRegister] = useState(false);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();
  const [
    loginUser,
    {
      data: loginData,
      isLoading: loginIsLoading,
      isError: loginIsError,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

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
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      signupUser({ name, email, password });
    }
  };
  useEffect(() => {
    if (signupIsSuccess) {
      navigate('/login');
    }
  }, [signupIsSuccess, navigate]);

  const handleSubmit = async () => {
    if (email && password) {
      await loginUser({ email, password });
    }
  };

  useEffect(() => {
    if (loginIsSuccess) {
      navigate('/');
    }
  }, [loginIsSuccess, navigate]);

  return (
    <div className="max-w-full mx-auto h-screen flex bg-white rounded-lg shadow overflow-hidden ">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
        <img className="absolute h-auto w-full object-cover" src={bookImg} alt="my book" />
      </div>
      <div className="w-full flex items-center xl:w-1/2 ">
        <div className="p-8 w-full">
          <form method="post" action="#">
            {!showRegister ? (
              <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            ) : (
              <h1 className=" text-2xl font-bold"> Register Your Account</h1>
            )}

            <div>
              {!showRegister ? (
                <span className="text-gray-600 text-sm">
                  Don't have an account?
                  <a href="#" className="text-blue-500" onClick={() => setShowRegister(true)}>
                    <span className="text-gray-700 text-sm font-semibold">Sign up</span>
                  </a>
                </span>
              ) : (
                <span className="text-gray-600 text-sm">
                  Already have an account?
                  <a href="#" className="text-blue-500" onClick={() => setShowRegister(false)}>
                    <span className="text-gray-700 text-sm font-semibold">Sign in</span>
                  </a>
                </span>
              )}
            </div>
            {showRegister && (
              <div className="mb-4 mt-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Name
                </label>
                <input
                  className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
            )}
            <div className="mb-4 mt-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="email"
                defaultValue={email}
                onChange={handleChange}
                placeholder="Your email address"
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
                defaultValue={password}
                onChange={handleChange}
                placeholder="Your password"
              />
            </div>
            {showRegister && (
              <div className="mb-6 mt-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="confirmPassword"
                  type="password"
                  defaultValue={confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
                <a
                  className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                  href="/forgot"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <div className="flex w-full mt-8">
              {!showRegister ? (
                <button
                  className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                  onClick={() => handleSubmit()}
                >
                  Sign in
                </button>
              ) : (
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                  onClick={() => signupHandleSubmit()}
                >
                  {' '}
                  Sign up{' '}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
