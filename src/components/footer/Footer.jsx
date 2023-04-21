import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">HITESH PRAJAPATI</a>

      <ul className="permalinks">
        
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_hitesh_421/"><FiInstagram/></a>
        <a href="https://twitter.com/HiteshP90659502"><IoLogoTwitter/></a>
      </div>

      <div className="footer__desclaimer">
        <small>Desclaimer: Made for React Practice Purpose</small>
      </div>

    </footer>
  )       
}

export default footer
