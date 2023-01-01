import React from 'react'

import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Habilidade from './components/habilidade/Habilidade'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Habilidade />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App