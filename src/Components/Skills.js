// skills.js
import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap,
         FaChartBar, FaChartLine, FaDatabase, FaCamera } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel,
         SiJavascript, SiStreamlit, SiFlask, SiJupyter, SiGooglecolab, SiPytorch } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus size={40} color="yellow" />,
    "Python": <FaPython size={40} color="yellow" />,
    "Pandas": <FaChartBar size={40} color="yellow" />,
    "NumPy": <FaChartBar size={40} color="yellow" />,
    "Matplotlib": <FaChartBar size={40} color="yellow" />,
    "Seaborn": <FaChartLine size={40} color="yellow" />,
    "Scikit-learn": <FaChartBar size={40} color="yellow" />,
    "TensorFlow": <FaChartLine size={40} color="yellow" />,
    "Keras": <FaChartLine size={40} color="yellow" />,
    "PyTorch": <SiPytorch size={40} color="yellow" />,
    "OpenCV": <FaCamera size={40} color="yellow" />,
    "Flask": <SiFlask size={40} color="yellow" />,
    "Streamlit": <SiStreamlit size={40} color="yellow" />,
    "SQL": <FaDatabase size={40} color="yellow" />,
    "Git": <FaGitAlt size={40} color="yellow" />,
    "GitHub": <FaGithub size={40} color="yellow" />,
    "Google Colab": <SiGooglecolab size={40} color="yellow" />,
    "Jupyter Notebook": <SiJupyter size={40} color="yellow" />,
    "Postman": <SiPostman size={40} color="yellow" />,
    "React": <FaReact size={40} color="yellow" />,
    "Javascript": <SiJavascript size={40} color="yellow" />,
    "Node": <DiNodejs size={40} color="yellow" />,
    "Express": <SiExpress size={40} color="yellow" />,
    "MongoDb": <SiMongodb size={40} color="yellow" />,
    "Npm": <FaNpm size={40} color="yellow" />,
    "Figma": <FaFigma size={40} color="yellow" />,
    "Bootstrap": <FaBootstrap size={40} color="yellow" />,
    "Vercel": <SiVercel size={40} color="yellow" />
  };

  return (
    <div title={skill} className='SkillBox' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
      {icon[skill] || <span style={{ fontSize: '2rem', color: 'yellow' }}>⚙️</span>}
      <span style={{ marginTop: '5px', fontSize: '0.9rem', color: 'white' }}>{skill}</span>
    </div>
  );
};

export default Skills;
