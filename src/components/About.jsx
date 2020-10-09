import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import me from '../assets/avatars/marley-bw.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <Link to="/">
          <i className="fas fa-arrow-left about__back-arrow"></i>
        </Link>
      </div>
      <div className="about__content-wrapper">
        <img src={me} alt="marley" className="about__img" />
        <div className="about__about-me">
          <p className="about__about-me-content">
            Marley Anthony is a Vancouver based outdoor and portrait photographer. He mostly enjoys taking pictures in the great outdoors of his beautiful country, Canada. Though Marley mostly enjoys landscape photography, he is also passionate about animals. If he is not taking photos of landscapes or animals, you can also find him taking photos of his friends. If you are still able to find Marley not taking photos of landscapes, animals or his friends, you can find him flying planes, playing basketball or cycling.
            <br />
            <br />
            Marley first picked up a camera 3 years ago on a family trip to Montréal. Since then he has been hooked. Marley hopes to one day make photography his life. Travelling the world, photographing all the beautiful sights, people and animals on our planet is Marley's dream. Until then, he enjoys his time as a student pilot in Vancouver, BC.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About
