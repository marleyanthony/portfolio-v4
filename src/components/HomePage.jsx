import React from 'react';
import HomeAbout from './HomeAbout';
import Web from './Web';
import Mobile from './Mobile';
import Photo from './Photo';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__about-wrapper">
        <HomeAbout />
      </div>
      <div className="home-page__scroll-wrapper">
        <Web />
        <Photo />
        <Mobile />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
