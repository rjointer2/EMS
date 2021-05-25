import React from 'react';
import './Footer.css'

const Footer = () => (
  <div className="footContainer">
    <ul className="linksList">
      <li className="link">
      <a target="_blank" rel="noopener noreferrer" href="mailto:roody@gmail.com">Mail</a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:mmtariqk@gmail.com">Mail</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="#">Twitter</a>
      </li>
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/rjointer2/">Github</a>
      </li>
      
      <li className="link">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">LinkedIn</a>
      </li>
    </ul>
  </div>
);

export default Footer;