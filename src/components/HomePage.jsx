import React from 'react';
import HomeAbout from './HomeAbout';
import Web from './Web';
import Mobile from './Mobile';
import Photo from './Photo';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeAbout />
      <Web />
      <Photo />
      <Mobile />
      <Footer />
    </div>
  )
}

export default HomePage
