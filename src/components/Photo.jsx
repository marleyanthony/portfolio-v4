import React from 'react';
import outdoors from '../assets/thumbnails/outdoors.jpg';
import people from '../assets/thumbnails/people.jpg';
import wildlife from '../assets/thumbnails/wildlife.jpg';

const Photo = () => {
  return (
    <div className="photo">
      <div className="photo__header-wrapper">
        <h1 className="photo__header">.002 | Photography</h1>
        <a href="https://github.com/marleyanthony" target="_blank" className="photo__socials-icon" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <section className="photo__thumbnails-wrapper">
        <img src={outdoors} alt="outdoors" className="photo__thumbnails" />
        <img src={people} alt="people" className="photo__thumbnails" />
        <img src={wildlife} alt="wildlife" className="photo__thumbnails" />
      </section>
    </div>
  )
}

export default Photo
