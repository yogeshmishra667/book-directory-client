import React from 'react';
import mainImg from '../assets/AH.jpeg';

const About = () => {
  return (
    <div name="about" className="w-full justify-between pb-24">
      <div className="flex py-16 justify-center font-black text-3xl">
        <h1>About Us</h1>
      </div>
      <div className=" grid md:grid-cols-2 max-w-[1240px] mx-auto h-auto gap-0 md:gap-16">
        <div className="flex justify-center">
          <img src={mainImg} className="rounded-lg h-3/5 mt-8" />
        </div>
        <div className="md:mt-12 mt-8 px-4">
          <p className="leading-normal  md:px-0 text-xl md:text-lg">
            My name is Yogesh, and I'm a full-stack JavaScript developer from India. I develop
            innovative websites using my creativity and aesthetic solution. I have a keen interest
            in JavaScript and UI/UX and have been involved in web development since the early 2017
            when I was learning basic HTML. Since then, my interests have grown to include
            everything from building websites. My goal is always to learn new technologies and books
            that can help me grow as a web developer. one of my favorite quote that I live by is
            "knowing is not enough, we must apply".
          </p>
          <button className="bg-[#A1CF6B] text-black-300 border-none border-black px-8 py-3 mt-8">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
