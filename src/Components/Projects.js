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
       
        <ProjectBox projectPhoto={YogiCareImage} projectName="LangSQL-Assistant (Generative AI)" />
        <ProjectBox projectPhoto={OIPimage} projectName="Multi-Disease Medical Image Classification using CNNs (Deep Learning)" />
        <ProjectBox projectPhoto={temptrekImage} projectName="Student Performance Indicator(Classical ML)" />
        <ProjectBox projectPhoto={nqueenImage} projectName="StockNewsBot" />
      </div>

    </div>
  )
}

export default Projects
