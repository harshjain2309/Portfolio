import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, my name is <b>Harsh Jain</b> and I am from Bhopal, Madhya Pradesh, India. <br/><br/>
          I'm a <b>MERN stack web developer</b> and a pre-final year college student pursuing <b>BTech in ECE</b>. <br/><br/>
          I love to learn new technologies; currently, I can create decent web applications and am planning to learn <b>machine learning</b> and <b>generative AI</b> in the near future. <br/><br/>
          I am open to new <b>collaborations</b> or <b>work opportunities</b> where I can contribute and grow. Feel free to connect with me; links are below.

          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About