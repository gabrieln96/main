import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.png'

import {BsAward, BsFolderCheck} from 'react-icons/bs'
import {HiOutlineUserGroup} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Quem sou eu?</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum commodi porro quaerat quis. Veritatis, iusto modi consequatur repellendus aperiam quibusdam corrupti culpa quas adipisci tempore vero et? Incidunt, nihil.
          </p>
          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>

    </section>
  )
}

export default About