import React from 'react'
import './abaut.css'
import ME from '../../assets/me-about.jpg'
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
            <img src={ME} alt="About Image" />
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
              <small>200+ Workide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Complited Proyects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod repellat autem corrupti non sit fuga
            mollitia doloremque sapiente! Maiores nostrum laudantium enim neque iure obcaecati, alias similique dolore quae.
          </p>

          <a href="#contact" className='btn btn-primary'> Let´s Talk</a>
        </div>


      </div>
    </section>
  )
}
