import React from 'react';
import ProjectBox from './ProjectBox';
import YogiCareImage from '../images/yogicare.front.jpg';
import OIPimage from '../images/OIP.front.png';
import temptrekImage from '../images/TempTrek.front.png';
import nqueenImage from '../images/nqueen.front.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
       
        <ProjectBox projectPhoto={p1img} projectName="LangSQL-Assistant (Generative AI)" />
        <ProjectBox projectPhoto={p2img} projectName="Multi-Disease Medical Image Classification using CNNs (Deep Learning)" />
        <ProjectBox projectPhoto={p3img} projectName="Student Performance Indicator(Classical ML)" />
        <ProjectBox projectPhoto={p4img} projectName="StockNewsBot" />
      </div>

    </div>
  )
}

export default Projects
