import React from 'react'
import './abaut.css'
import ME from '../../assets/me-about.jpg'
import YO from '../../assets/yo.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
export const Abaut = () => {
  return (
    <section id='about'>
      <h5>Get to Kow</h5>
      <h2>About Me</h2>


      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={YO  } alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Workide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>19+ Complited Proyects</small>
            </article>
          </div>

          <p>
          Programador Full Stack con experiencia y liderazgo en creación de proyectos, con un alto compromiso en trabajo individual y 
            en equipo, con Abilidades en diferentes áreas del mundo de las tecnologías, con la capacidad de aportar un amplio valor
            a los proyectos empresariales.
          </p>

          <a href="#contact" className='btn btn-primary'> Let´s Talk</a>
        </div>


      </div>
    </section>
  )
}
