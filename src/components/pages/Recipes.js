import React from 'react'
import '../../App.css'
import recipe_cards from '../recipe_cards';

export default function Recipes() {
  return (
    <div>
    <h1 className='recipes'>RECIPES</h1>
    <recipe_cards />
    </div>

  )
}
