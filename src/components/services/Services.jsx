import React from 'react'

import {BsCheckLg} from 'react-icons/bs'

import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que tenho a oferecer</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services