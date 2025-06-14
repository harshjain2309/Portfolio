import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    YogiCare: "YogiCare is a wellness platform offering tailored yoga routines to address various health concerns.",
    YogiCareGithub: "https://github.com/harshjain2309/LangSQL-Assistant",
    YogiCareWebsite: "https://yogicare.netlify.app/",

    TempTrek: "A user-friendly weather application that provides real-time weather updates, forecasts, and detailed weather information for any location worldwide.",
    TempTrekGithub: "https://github.com/harshjain2309/TempTrek",
    TempTrekWebsite: "https://shiny-nasturtium-33876d.netlify.app/",

    CampusCollaborate: "This project was developed as part of the Smart India Hackathon 2023 (SIH 2023) under the Government of Jharkhand. Our team, Atomic Technigeers, created a robust web portal that integrates and manages projects taken up by students across various universities and colleges.",
    CampusCollaborateGithub: "https://github.com/harshjain2309/Online-Integrated-Platform-for-Student-Projects",
    CampusCollaborateWebsite: "https://voluble-douhua-db4077.netlify.app/",

    NQueenVisualizer: "The N-Queen problem, a classic combinatorial problem in which N queens must be placed on an N×N chessboard such that no two queens can share the same row, column, or diagonal.",
    NQueenVisualizerGithub: "https://github.com/harshjain2309/N-Queen-visualizer",
    NQueenVisualizerWebsite: "https://n-queen-visualizerr.netlify.app/"
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            <p>{desc[projectName]}</p> {/* Updated this line */}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default ProjectBox;
