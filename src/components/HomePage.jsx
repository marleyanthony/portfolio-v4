import React from 'react';
import HomeAbout from './HomeAbout';
import Web from './Web';
import Mobile from './Mobile';
import Photo from './Photo';
import About from './About';

const HomePage = () => {
  return (
    <div>
      <HomeAbout />
      <Web />
      <Mobile />
      <Photo />
    </div>
  )
}

export default HomePage
