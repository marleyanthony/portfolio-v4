import React from 'react';
import HomeAbout from './HomeAbout';
import Web from './Web';
import Mobile from './Mobile';
import Photo from './Photo';

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeAbout />
      <Web />
      <Mobile />
      <Photo />
    </div>
  )
}

export default HomePage
