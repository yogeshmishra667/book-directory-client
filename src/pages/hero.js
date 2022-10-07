import React from 'react';
import Header from '../components/header';

export default function HeroSec() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex space-y-60  items-center justify-center ">
        <div>
          <h1 className="text-7xl ">
            To Succeed <br /> you must be <br /> read
          </h1>
          <p className="">
            Not Sure What To Read Next ? Explore Our Catalog ,<br /> Of Public Domain Books With Our
            Editors.
          </p>
          <button className="bg-metal p-2 rounded mt-5">Explore Now</button>
        </div>
        <div className=" flex space-x-5 ">
          <div className="w-40 h-52 rounded rotate-12 bg-silver"></div>
          <div className="w-40 h-52 rounded rotate-12 bg-metal"></div>
        </div>
      </div>
    </>
  );
}
