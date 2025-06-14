import React from 'react';
import ProjectBox from './ProjectBox';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';


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
