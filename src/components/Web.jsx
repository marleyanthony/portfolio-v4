import React from 'react';
import html from '../assets/icons/html-5.svg';
import css from '../assets/icons/css-3.svg';
import js from '../assets/icons/javascript.svg';
import react from '../assets/icons/react-png.png';
import portfolio from '../assets/portfolio-screenshots/portfolio.png';
import simon from '../assets/portfolio-screenshots/simon-game.png';
import tip from '../assets/portfolio-screenshots/tip-calc.png';

const Web = () => {
  return (
    <div className="web">
      <div className="web__header-wrapper">
        <h1 className="web__header">.001 | Web Development</h1>
        <a href="https://github.com/marleyanthony" target="_blank" className="web__socials-icon" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="web__tech-wrapper">
        <img src={html} alt="html" className="web__tech-icon web__tech-icon--html" />
        <img src={css} alt="css" className="web__tech-icon web__tech-icon--css" />
        <img src={js} alt="js" className="web__tech-icon web__tech-icon--js" />
        <img src={react} alt="js" className="web__tech-icon web__tech-icon--react" />
      </div>
      <p className="web__tech-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolorem.</p>
      <div className="web__screenshot-wrapper">
        <img src={portfolio} alt="Portfolio" className="web__screenshot" />
        <img src={simon} alt="Simon Game" className="web__screenshot" />
        <img src={tip} alt="Tip Calculator" className="web__screenshot" />
      </div>
    </div>
  )
}

export default Web
