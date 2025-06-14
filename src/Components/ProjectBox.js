import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "LangSQL-Assistant (Generative AI)": {
      description: "YogiCare is a wellness platform offering tailored yoga routines to address various health concerns.",
      github: "https://github.com/harshjain2309/LangSQL-Assistant"
    },
    "Multi-Disease Medical Image Classification using CNNs (Deep Learning)": {
      description: "A user-friendly weather application that provides real-time weather updates, forecasts, and detailed weather information for any location worldwide.",
      github: "https://github.com/harshjain2309/Medical-Disease-Prediction-Using-CNN"
    },
    "Student Performance Indicator(Classical ML)": {
      description: "This project was developed as part of the Smart India Hackathon 2023 (SIH 2023) under the Government of Jharkhand. Our team, Atomic Technigeers, created a robust web portal that integrates and manages projects taken up by students across various universities and colleges.",
      github: "https://github.com/harshjain2309/Student-Performance-Indicator"
    },
    "StockNewsBot": {
      description: "The N-Queen problem, a classic combinatorial problem in which N queens must be placed on an N×N chessboard such that no two queens can share the same row, column, or diagonal.",
      github: "https://github.com/harshjain2309/StockNewsBot"
    }
  };

  const project = desc[projectName];

  return (
    <div className='projectBox'> 
      <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{project?.description}</p>
        <br />
        {project?.github && (
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectBox;
