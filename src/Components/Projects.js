import React from 'react';
import ProjectBox from './ProjectBox';
import YogiCareImage from '../images/p1.png';
import OIPimage from '../images/p2.png';
import temptrekImage from '../images/p3.png';
import nqueenImage from '../images/p4.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
       
        <ProjectBox projectPhoto={p1} projectName="LangSQL-Assistant (Generative AI)" />
        <ProjectBox projectPhoto={p2} projectName="Multi-Disease Medical Image Classification using CNNs (Deep Learning)" />
        <ProjectBox projectPhoto={p3} projectName="Student Performance Indicator(Classical ML)" />
        <ProjectBox projectPhoto={p4} projectName="StockNewsBot" />
      </div>

    </div>
  )
}

export default Projects
