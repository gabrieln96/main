import React from 'react'
import { useState } from 'react'

import './nav.css'
import {GrHomeRounded, GrUser, GrBook, GrServicePlay, GrContactInfo} from 'react-icons/gr'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GrHomeRounded /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''} ><GrUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><GrBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><GrServicePlay /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><GrContactInfo /></a>
    </nav>
  )
}

export default Nav