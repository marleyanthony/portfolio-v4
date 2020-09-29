import React from 'react';
import me from '../assets/marley.jpg';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
    <>
      <div className="home-about">
        <div className="home-about__header-wrapper">
          <Link to="/about">
            <img src={me} alt="Marley" className="home-about__img" />
          </Link>
          <h1 className="home-about__header">I'm Marley.</h1>
          <p className="home-about__info">
            Vancouver based web developer and photographer with a passion for the outdoors.
          </p>
        </div>
        <div className="home-about__socials-wrapper">
          <a href="https://www.instagram.com/marleyanth0ny" target="_blank" className="home-about__socials-icon home-about__socials-icon--instagram" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/marleyanthony" target="_blank" className="home-about__socials-icon home-about__socials-icon--github" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.facebook.com/marleycanthony" target="_blank" className="home-about__socials-icon home-about__socials-icon--facebook" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/marleyanthony/" target="_blank" className="home-about__socials-icon home-about__socials-icon--linkedin" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="home-about__btn-wrapper">
          <button className="home-about__btn home-about__btn--hello">Say Hello</button>
          <button className="home-about__btn home-about__btn--resume">My Resume</button>
        </div>
      </div>
    </>
  )
}

export default HomeAbout
