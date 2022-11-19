import React from 'react';
import { useLoginUserMutation } from '../features/apiSlice';
import Navbar from '../components/Navbar';

const HeroPage = () => {
  const { data, isLoading, isError, isSuccess } = useLoginUserMutation();
  console.log(data);
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between">
      <Navbar />
      <div className=" grid md:grid-cols-2 max-w-[1240px] mx-auto h-screen">
        <div className="flex flex-col justify-center md:items-start w-full">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">To Succeed you must be read</h1>
          <p className="text-lg pt-8">
            Not Sure What To Read Next ? Explore Our Catalog Of Public Domain Books With Our Editors
            .
          </p>
          <button className="p-3 mt-8">Explore Now</button>
        </div>
        <div className="flex w-full px-2 py-1 items-center justify-around ">
          <div className=" bg-slate-400  px-16  py-20 rounded-lg"></div>
          <div className=" bg-slate-400  px-16  py-20 rounded-lg"></div>
          <div className=" bg-slate-400 px-16  py-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
