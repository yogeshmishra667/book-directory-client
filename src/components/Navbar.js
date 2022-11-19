import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="bg-transparent w-screen z-10  drop-shadow-lg mt-8">
      <div className="h-full w-full max-w-[1240px] mx-auto flex justify-between px-2 items-center  ">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Yo-Books</h1>

        <ul className="hidden md:flex">
          <li>
            <LinkScroll to="/" smooth={true} duration={500}>
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="book" smooth={true} duration={500}>
              Books
            </LinkScroll>
          </li>

          <li>
            <LinkScroll to="about" smooth={true} duration={500}>
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="contact" smooth={true} duration={500}>
              Contact
            </LinkScroll>
          </li>
        </ul>

        <div className="hidden md:flex pr-4">
          <LinkRouter to="/signin">
            <button className="border-none bg-transparent text-black mr-4 py-3">Signin</button>
          </LinkRouter>
          <LinkRouter to="/signup">
            <button className="px-8 py-3">Register</button>
          </LinkRouter>
        </div>
        {/* this code work when screen size reduce ⬇️*/}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="border-b-2 border-zinc-300 w-full">
          {' '}
          <LinkScroll to="home" smooth={true} duration={500}>
            Home
          </LinkScroll>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <LinkScroll to="book" smooth={true} duration={500}>
            Books
          </LinkScroll>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <LinkScroll to="about" smooth={true} duration={500}>
            About
          </LinkScroll>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <LinkScroll to="contact" smooth={true} duration={500}>
            Contact
          </LinkScroll>
        </li>

        <div className="flex flex-col my-4">
          <LinkRouter to="/signin">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Signin</button>
          </LinkRouter>
          <LinkRouter to="/signup">
            <button className="px-8 py-3">Signup</button>
          </LinkRouter>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
