import React from 'react'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'
export const Portfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Image 1" />

          </div>
          <h3>Maquetado  medico</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/steventflorez/medicalClass.git" className='btn' target='_blank'> Github</a>
            <a href="https://medicalclass.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Image 1" />
          </div>
          <h3>App Web Delivery</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/steventflorez/Licores-Party-Delivery.git" className='btn' target='_blank'> Github</a>
            <a href="https://licoresparty.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Image 1" />
          </div>
          <h3>Juego de Preguntas</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/steventflorez/Juego_de_preguntas.git" className='btn' target='_blank'> Github</a>
            <a href="https://juegodepreguntas.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Image 1" />
          </div>
          <h3>Web Empresarial TI</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/steventflorez/MaquetadoVenta.git" className='btn' target='_blank'> Github</a>
            <a href="https://statuesque-nasturtium-cd9ed1.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Image 1" />
          </div>
          <h3>App Movil de Barberia</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'> Github</a>
            <a href="https://play.google.com/store/apps/details?id=com.gmail.angeldriverpro.uas&hl=es_BO" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

       




      </div>
    </section>
  )
}
