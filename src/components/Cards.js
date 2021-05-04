import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1138781799%2F0x0.jpg%3FcropX1%3D28%26cropX2%3D7436%26cropY1%3D0%26cropY2%3D4166'
              text='Explore the potential of Artificial Intelligence'
              label='A.I.'
              path='/services'
            />
            <CardItem
              src='https://csunshinetoday.csun.edu/wp-content/uploads/Math4-web.jpg'
              text='Deepen your understanding of Mathematics'
              label='Math'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://media-exp1.licdn.com/dms/image/C4D1BAQHg6yM2QSvcyg/company-background_10000/0/1601919495731?e=2159024400&v=beta&t=qd_KiJHwnOTXg3M-r72qGu7oUqiGW7WjMpVbZLqlSjA'
              text='Take a lesson in one of the fundamentals of life'
              label='Biology'
              path='/services'
            />
            <CardItem
              src='https://cdn.corporatefinanceinstitute.com/assets/managerial-finance-1024x577.jpeg'
              text='Learn from professionals in the industry'
              label='Economics'
              path='/products'
            />
            <CardItem
              src='https://www.liquidplanner.com/wp-content/uploads/2018/10/iStock-1175302204-2.jpg'
              text='Take advantage of mastering life skills'
              label='Time Management'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
