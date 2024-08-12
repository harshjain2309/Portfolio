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
       
        <ProjectBox projectPhoto={YogiCareImage} projectName="YogiCare" />
        <ProjectBox projectPhoto={OIPimage} projectName="CampusCollaborate" />
        <ProjectBox projectPhoto={temptrekImage} projectName="TempTrek" />
        <ProjectBox projectPhoto={nqueenImage} projectName="NQueenVisualizer" />
      </div>

    </div>
  )
}

export default Projects