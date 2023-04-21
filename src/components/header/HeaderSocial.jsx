import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/hitesh-prajapati-211227224/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/hitesh409" target="_blank" rel="noreferrer" ><BsGithub /></a>
        <a href="https://www.instagram.com/_hitesh_421/" target="_blank" rel="noreferrer" ><GrInstagram /></a>
      
    </div>
  )
}

export default HeaderSocial
