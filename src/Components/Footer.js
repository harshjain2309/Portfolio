import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by HARSH JAIN</h4>
      <h4>Copyright &copy; 2024 HJ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/harshjain2309" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/harsh-jain-817763251/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:jainh2113@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/harshjain2309/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer;