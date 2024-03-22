import React from "react";
import { navArrowUp } from "../../common/assets";
import './UpButton.css';

const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

export const UpButton = () => (
    <button className='nav-arrow-up' title='Back to Top' onClick={scrollToTop} >{navArrowUp}</button>
)