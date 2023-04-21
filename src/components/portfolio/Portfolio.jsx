import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.webp'
import IMG2 from '../../assets/img1.webp'
import IMG3 from '../../assets/img1.webp'
import IMG4 from '../../assets/img1.webp'



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Movie Picker Website',
    github: 'https://github.com/hitesh409/Movie-Picker-JAMStack',
    demo: 'https://moviepickerjamstack.netlify.app'
  },
  {
    id:2,
    image: IMG2,
    title: 'E-commerce using Wyam',
    github: 'https://github.com/hitesh409/E-commerce-using-Wyam-And-SnipCart',
    demo: 'https://github.com/hitesh409/E-commerce-using-Wyam-And-SnipCart'
  },
  {
    id:3,
    image: IMG3,
    title: 'Driver Drowsiness Detection System',
    github: 'https://github.com/hitesh409/Driver-Drowsiness-Detection',
    demo: 'https://github.com/hitesh409/Driver-Drowsiness-Detection'
  },
  {
    id:4,
    image: IMG4,
    title: 'CLI-Quizify',
    github: 'https://github.com/hitesh409/CLI-Quizify',
    demo: 'https://github.com/hitesh409/CLI-Quizify'
  },
  
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-itrm-cta">
                  <a href={github} className='btn' target='_blank'rel="noopener noreferrer" >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      
        
      

        

        
      </div>
    </section>
  )
}

export default portfolio
