import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    p1: "YogiCare is a wellness platform offering tailored yoga routines to address various health concerns.",
    LangSQL-Assistant (Generative AI): "https://github.com/harshjain2309/LangSQL-Assistant",

    p2: "A user-friendly weather application that provides real-time weather updates, forecasts, and detailed weather information for any location worldwide.",
    Multi-Disease Medical Image Classification using CNNs (Deep Learning): "https://github.com/harshjain2309/Medical-Disease-Prediction-Using-CNN",

    p3: "This project was developed as part of the Smart India Hackathon 2023 (SIH 2023) under the Government of Jharkhand. Our team, Atomic Technigeers, created a robust web portal that integrates and manages projects taken up by students across various universities and colleges.",
    Student Performance Indicator(Classical ML): "https://github.com/harshjain2309/Student-Performance-Indicator",

    p4: "The N-Queen problem, a classic combinatorial problem in which N queens must be placed on an N×N chessboard such that no two queens can share the same row, column, or diagonal.",
    StockNewsBot: "https://github.com/harshjain2309/StockNewsBot"
  };

  const githubLink = desc[projectName + 'Github'];
  const description = desc[projectName];

  return (
    <div className='projectBox'> 
      <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{description}</p>
        <br />
        {githubLink && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectBox;
