import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Interned at Hatkesh InfoTech</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0 worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ completed basic projects</small>
            </article>
          </div>

          <p>Hello, I am Hitesh Prajapati, a student from Birla Vishvakarma Mahavidhyalaya , Web Developer and ML enthusiastic willing to contribute in a software world with my acquired skills...</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
