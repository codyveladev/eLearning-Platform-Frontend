import React, {useEffect} from 'react';
import'../App.css';
import './CourseSelect.css';
import CardItem from './CardItem';




function CourseSelect() {

    return(
        <div className='course-container'>
          <h1>Get started by choosing a subject</h1>
          <input type="text" placeholder="Search for Courses..."></input>
          <div className='cards__container'>
            <CardItem
              src='https://image.freepik.com/free-vector/biology-laboratory-workspace-design-concept_1284-11559.jpg'
              text=''
              label='Biology'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/chemistry_23-2148153742.jpg'
              text=''
              label='Chemistry'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/background-about-physics_1284-698.jpg'
              text=''
              label='Physics'
              path='/recipes'
            />
            <CardItem
              src= 'https://image.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg'
              text=''
              label='Calculus'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg'
              text=''
              label='Algebra'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg'
              text=''
              label='Geometry'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg'
              text=''
              label='Triginometry'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/html5-programming-internet-website-development-web-application-engineering-script-writing-html-code-optimization-programmer-fixing-bugs_335657-2678.jpg'
              text=''
              label='HTML'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg'
              text=''
              label='JavaScript'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/programmer-working-with-sql_52683-22997.jpg'
              text=''
              label='SQL'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/vintage-books-with-paper-scroll-feather-ink-pot-colored-sketch-decorative-concept-vector-illustration_1284-2997.jpg'
              text=''
              label='US History'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/vintage-books-with-paper-scroll-feather-ink-pot-colored-sketch-decorative-concept-vector-illustration_1284-2997.jpg'
              text=''
              label='US Government'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/vintage-physical-world-map-with-rivers-mountains-vector-illustration-retro-vintage-old-world-map-with-antique-travel-ship_53562-4815.jpg'
              text=''
              label='World History'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/illustration-data-analysis-graph_53876-18129.jpg'
              text=''
              label='Macroeconomics'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/illustration-data-analysis-graph_53876-18129.jpg'
              text=''
              label='Microeconomics'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/science-education-background_23-2148486901.jpg'
              label='Cosmology and Astronomy'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/technicians-repairing-generator-transformer-flat-illustration-cartoon-electric-workers-making-power-distribution-line_74855-14173.jpg'
              text=''
              label='Electrical Engineering'
              path='/recipes'
            />
            <CardItem
              src='https://image.freepik.com/free-vector/science-education-background_23-2148486901.jpg'
              text=''
              label='Organic Chemistry'
              path='/recipes'
            />
          </div>
        </div>
         
    );
  }
  
  export default CourseSelect