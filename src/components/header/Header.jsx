import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../..//assets/me.png'
import YO from '../../assets/stevent02.png'
import HeaderSocials from './HeaderSocials'


export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Stevent Florez</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={YO} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
