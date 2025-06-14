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
          I’m an <b>Aspiring Data Scientist</b> and <b>Software Developer</b> and a final year college student pursuing <b>BTech in ECE</b>. <br/><br/>
          I have an hands-on experience building classical ML models, deep learning pipelines, and generative AI systems. I enjoy deploying these solutions as interactive web apps using Streamlit and Flask.

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
        
        <Skills skill='Python' />
        <Skills skill='Pandas' />
        <Skills skill='NumPy' />
        <Skills skill='Matplotlib' />
        <Skills skill='Seaborn' />
        <Skills skill='Scikit-learn' />
        <Skills skill='TensorFlow' />
        <Skills skill='Keras' />
        <Skills skill='PyTorch' /> {/* if you've used it */}
        <Skills skill='OpenCV' /> {/* if you've done any image-based projects */}
        <Skills skill='Flask' />
        <Skills skill='Streamlit' />
        <Skills skill='SQL' />
        <Skills skill='Git' />
        <Skills skill='GitHub' />
        <Skills skill='Google Colab' />
        <Skills skill='Jupyter Notebook' />
        
      </div>
    </>
  )
}

export default About
