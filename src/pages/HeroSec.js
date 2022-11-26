import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FetchAPIData from '../utils/FetchAPIData';
import alchemist from '../assets/the-alchemist.jpeg';
import cantHurt from '../assets/cant hurt me.jpg';
import ikigai from '../assets/atomic-habits.png';

const HeroPage = ({ userData }) => {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between">
      <Navbar userData={userData} />
      <div className=" grid md:grid-cols-2 max-w-[1240px] mx-auto h-screen">
        <div className="flex flex-col justify-center md:items-start w-full">
          <h1 className="py-3 text-5xl md:text-7xl font-bold">To Succeed you must be read</h1>
          <p className="text-lg pt-8">
            Not Sure What To Read Next ? Explore Our Catalog Of Public Domain Books With Our Editors
            .
          </p>
          <button className="p-3 mt-8">
            <a href="https://play.google.com/store/books/" target="_blank">
              Explore Now
            </a>
          </button>
        </div>
        <div className="flex w-full items-center justify-around">
          <div className="rounded-lg w-80 h-94 border-8 border-[#BC78EC] ml-8 shadow-xl">
            <img src={alchemist} alt="alchemist" />
          </div>
          <div className="rounded-lg w-80 h-94 border-8 ml-8 border-[#BC78EC] shadow-xl">
            <img src={cantHurt} alt="cant hurt me" />
          </div>
          <div className="rounded-lg w-80 h-94 border-8 ml-8 border-[#BC78EC] shadow-xl">
            <img src={ikigai} alt="ikigai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
