import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus size={40} color="yellow"/>,
        Postman: <SiPostman size={40} color="yellow"/>,
        React: <FaReact size={40} color="yellow"/>,
        Javascript: <SiJavascript size={40} color="yellow"/>,
        Node : <DiNodejs size={40} color="yellow"/>,
        Express : <SiExpress size={40} color="yellow"/>,
        MongoDb : <SiMongodb size={40} color="yellow"/>,
        Git : <FaGitAlt size={40} color="yellow"/>,
        Github : <FaGithub size={40} color="yellow"/>,
        Npm : <FaNpm size={40} color="yellow"/>,
        Figma : <FaFigma size={40} color="yellow"/>,
        Bootstrap: <FaBootstrap size={40} color="yellow"/>,
        Vercel : <SiVercel size={40} color="yellow"/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
