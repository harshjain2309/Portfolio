import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "LangSQL-Assistant (Generative AI)": {
      description: "Built a GenAI-powered SQL agent using LangChain and GROQ LLaMA 3 (8B) to translate natural language into accurate SQL queries across both SQLite3 and MySQL databases.",
      github: "https://github.com/harshjain2309/LangSQL-Assistant"
    },
    "Multi-Disease Medical Image Classification using CNNs (Deep Learning)": {
      description: "Developed four CNN‑based classifiers for Pneumonia (Chest X‑ray), Breast Cancer (Ultrasound), Lung Cancer (CT scans), and Skin Cancer (Dermatoscopic images) using transfer learning (MobileNetV2, Xception), data augmentation, image preprocessing, and hyperparameter tuning to achieve greater that 90\% accuracy on two of HAM10000, IQ‑OTHNCCD, and Chest X‑ray Pneumonia datasets.",
      github: "https://github.com/harshjain2309/Medical-Disease-Prediction-Using-CNN"
    },
    "Student Performance Indicator(Classical ML)": {
      description: "Built an end-to-end machine learning pipeline to predict student scores using socio-economic and demographic features by training Linear, Ridge, and Lasso Regression models with a modular scikit-learning pipeline for preprocessing, feature engineering, and evaluation.",
      github: "https://github.com/harshjain2309/Student-Performance-Indicator"
    },
    "StockNewsBot": {
      description: "Engineered an end-to-end LLM-based chatbot that performs semantic financial research by parsing real-time news URLs and executing context-aware Q\&A via Groq’s ultra-fast Llama3-8b-8192 large language model.",
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
