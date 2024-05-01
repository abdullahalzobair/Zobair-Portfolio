import React from 'react';
import './projects.css';
import { IMG1, IMG2, IMG3, IMG4 } from '../../assets';

const data = [
  {
    id:1,
    Image:IMG1,
    title:'Abdullah Al Zobair',
    description:'Portfolio Website',
    github:"https://github.com/abdullahalzobair/Portfolio_Website",
    live:'https://abdullahalzobair.github.io/Portfolio_Website/'
  },
  {
    id:2,
    Image:IMG2,
    title:'ZUBA',
    description:'Shopping E-commerce Platform',
    github:"https://github.com/abdullahalzobair/ZUBA-ECommerce",
    live:'https://zuba.netlify.app/'
  },
  {
    id:3,
    Image:IMG3,
    title:'Foodi ',
    description:'Food Delivery E-commerce Platform',
    github:"https://github.com/abdullahalzobair/Foodi",
    live:'https://foodi29.netlify.app/'
  },
  {
    id:4,
    Image:IMG4,
    title:'Electric Vehicle',
    description:'Car Landing Page',
    github:"https://github.com/abdullahalzobair/EV-Landing-Page",
    live:'https://ev-landing-page.netlify.app/'
  },
]

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className="heading">PROJECTS</h2>
      <div className='projects-container'>
        {
          data.map(({id, Image, title, description, github, live })=>{
            return(
              <div key={id} className='projects-item'>
                <div className="projects-item_image">
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <div className="projects-item-cta">
                  <a href={github} className='btn-primary' target='__blank'>Github</a>
                  <a href={live} className='btn' target='__blank'>Live live</a>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects