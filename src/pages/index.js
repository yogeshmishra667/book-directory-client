import React from 'react';
import HeroPage from '../pages/HeroSec';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainBook from '../pages/mainBook';
import MainBooks from './HeroMain';
import Footer from '../components/footer';

const Index = ({ userData }) => {
  return (
    <div>
      <HeroPage userData={userData} />
      <MainBooks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
