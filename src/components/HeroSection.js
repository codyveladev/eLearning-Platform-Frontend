import React from 'react';
import'../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return(
    <div className='hero-container'>
      <h1>ELearning</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'>START LEARNING</Button>
      </div>
    </div>
  );
}

export default HeroSection
