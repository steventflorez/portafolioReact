import React from 'react'
import { Abaut } from './components/abaut/Abaut'
import { Contact } from './components/contacts/Contact'
import { Experience } from './components/experience/Experience'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import Nav from './components/nav/Nav'
import { Portfolio } from './components/portfolio/Portfolio'
import { Services } from './components/services/Services'
import { Testimonials } from './components/testimonial/Testimonials'

export const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <Abaut/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact/>
       
    </>
  )
}
