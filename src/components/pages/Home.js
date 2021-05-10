import React from 'react';
import '../../App.css';
import Navbar from "../Navbar";
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default Home
