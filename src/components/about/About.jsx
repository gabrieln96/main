import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'

import {BsAward, BsFolderCheck} from 'react-icons/bs'
import {HiOutlineUserGroup} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Quem sou eu?</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about_me-image">
              <img src={ME} alt="About me" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <BsAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1+ Anos</small>
            </article>
            <article className='about__card'>
                <HiOutlineUserGroup className='about__icon'/>
              <h5>Clientes</h5>
              <small>...</small>
            </article>
            <article className='about__card'>
                <BsFolderCheck className='about__icon'/>
              <h5>Projetos</h5>
              <small>5+ Completos</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About