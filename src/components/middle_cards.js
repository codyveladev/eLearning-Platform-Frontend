import React from 'react';
import './recipe_cards.css';
import CardItem from './CardItem';


function recipe_cards() {
  return (
    <div className='cards'>
      <h1>example</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='n/a'
              text=''
              label='elearning_image'
              path='/services'
            />
            <CardItem
              src=''
              text=''
              label='elearning_image'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default recipe_cards
