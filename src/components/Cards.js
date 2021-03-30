import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these popular courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://education.viewsonic.com/wp-content/uploads/2018/12/Head.png'
              text=''
              label='Technology'
              path='/recipes'
            />
            <CardItem
              src='https://teachonline.ca/sites/default/files/tools-trends/banner/new-pedagogy-1140x400.jpg'
              text=''
              label='Education'
              path='/recipes'
            />
            <CardItem
              src='https://www.achieve3000.com/media/images/Math_mobile2x.original.png'
              text=''
              label='Mathematics'
              path='/recipes'
            />
            <CardItem
              src='https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/fb-leverage-of-coding.jpg'
              text=''
              label='Code'
              path='/recipes'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
