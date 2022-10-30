import React from 'react';
import HeroPage from '../pages/HeroSec';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainBook from '../pages/mainBook';

const Index = () => {
  return (
    <div>
      <HeroPage />
      <MainBook />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
