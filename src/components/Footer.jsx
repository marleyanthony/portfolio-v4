import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <h1 className="footer__content">Made with ♥️ by Me</h1>
        <h2 className="footer__content-year">Twenty Twenty</h2>
      </div>
      <div className="footer__socials-wrapper">
        <a href="https://www.instagram.com/marleyanth0ny" target="_blank" className="footer__socials-icon footer__socials-icon--instagram" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/marleyanthony" target="_blank" className="footer__socials-icon footer__socials-icon--github" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/marleycanthony" target="_blank" className="footer__socials-icon footer__socials-icon--facebook" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/marleyanthony/" target="_blank" className="footer__socials-icon footer__socials-icon--linkedin" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
