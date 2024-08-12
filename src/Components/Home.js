import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>HARSH JAIN</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
            I am fluent in <b>DSA (using C++)</b> and know a bit of <b>Python.</b> I am working on a few 
            projects in the <b>MERN</b> stack.<br />

            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I plan to learn <b>App Development</b>, <b>Django</b>, <b>PHP</b> and<b> Typescript</b> in the near future. <br /><br />
            I have solved <b>150+ LeetCode</b> and <b>120+ GFG</b> DSA questions and am continuously looking forward to improving my Programming and Development skills.  
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home