import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "LangSQL-Assistant (Generative AI)": {
      description: "A GenAI SQL agent using LangChain and GROQ LLaMA 3 (8B) to convert natural language into SQL for SQLite3/MySQL.",
      github: "https://github.com/harshjain2309/LangSQL-Assistant"
    },
    "Multi-Disease Medical Image Classification using CNNs (Deep Learning)": {
      description: "Built four CNN classifiers for Pneumonia, Breast, Lung, and Skin Cancer using transfer learning (MobileNetV2, Xception), data augmentation, and tuning—achieving >90% accuracy on HAM10000, IQ‑OTHNCCD, and Chest X‑ray datasets.",
      github: "https://github.com/harshjain2309/Medical-Disease-Prediction-Using-CNN"
    },
    "Student Performance Indicator(Classical ML)": {
      description: "Designed an end-to-end ML pipeline using Linear, Ridge, and Lasso Regression to predict student scores from socio-economic and demographic data with modular scikit-learn components for preprocessing, feature engineering, and evaluation.",
      github: "https://github.com/harshjain2309/Student-Performance-Indicator"
    },
    "StockNewsBot": {
      description: "Engineered an LLM-powered chatbot for semantic financial research using Groq’s LLaMA3-8B, enabling real-time news parsing and context-aware Q&A",
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
