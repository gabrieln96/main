import React from 'react'

import './nav.css'
import {GrHomeRounded, GrUser, GrBook, GrServicePlay, GrContactInfo} from 'react-icons/gr'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><GrHomeRounded /></a>
      <a href="#about"><GrUser /></a>
      <a href="#experience"><GrBook /></a>
      <a href="#services"><GrServicePlay /></a>
      <a href="#contact"><GrContactInfo /></a>
    </nav>
  )
}

export default Nav