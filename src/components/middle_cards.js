import React from 'react';
import './recipe_cards.css';
import CardItem from './CardItem';


function recipe_cards() {
  return (
    <div className='cards'>
      <h1>Breakfast</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.hdwallpapers.in/download/food_strawberry_pie_4k_hd-HD.jpg'
              text=''
              label='Dessert'
              path='/recipes'
            />
            <CardItem
              src=''
              text=''
              label='Savory'
              path='/recipes'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default recipe_cards
