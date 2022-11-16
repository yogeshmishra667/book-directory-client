import React from 'react';
import HeroPage from '../pages/HeroSec';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainBook from '../pages/mainBook';
import MainBooks from './HeroMain';

const Index = () => {
  return (
    <div>
      <HeroPage />
      <MainBooks />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
