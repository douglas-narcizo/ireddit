import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import './Footer.css';

export const Footer = () => (
  <div>
    <span className='highlight'>Developed by</span> - Douglas Narcizo | 2024
    <a className='social-icon'
      href='https://www.linkedin.com/in/douglas-narcizo/'
      target='_blank' rel='noreferrer' >
      <FaLinkedin />
    </a>
    <a className='social-icon'
      href='https://github.com/douglas-narcizo'
      target='_blank' rel='noreferrer' >
      <FaGithub />
    </a>
  </div>
)