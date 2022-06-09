import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maquetacion de paginas Web con Illustrator, AdoveXD, con estandares de diseño.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creacion de logos, y modelado de marcas.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Estrategias de CEO y Marketing </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creacion de piezas publicitarias y piezas para redes sociales.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Diseño de Redes Sociales.</p>
            </li>
           
          </ul>
        </article>
        {/*END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development  </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creacion de Paginas Web modernas y robustas con tecnologias ponentes del mercado.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manejo de base de Datos y manejo y creacion de APIS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Aplicaciones Web Responsivas para movil y tablet.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Migracion y creacion de aplicaciones moviles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automatizacion de proyectos con WebScraping</p>
            </li>
            
          </ul>
        </article>

        {/* WEB DEVELOPEMET */}
        {/* <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, fugit.</p>
            </li>
          </ul>
        </article> */}
        {/*END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}
