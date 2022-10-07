import React from 'react';

export default function Header() {
  return (
    <>
      <div className="flex justify-between p-4 ">
        <h1>Yo-Books</h1>
        <ul className="flex space-x-5">
          <li>HOME</li>
          <li>BOOKS</li>
          <li>ABOUT ME</li>
          <li>CONTACT</li>
        </ul>
        <div className="flex space-x-5">
          <div>Search box</div>
          <div>Login</div>
        </div>
      </div>
    </>
  );
}
