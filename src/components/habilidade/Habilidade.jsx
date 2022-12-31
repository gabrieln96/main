import React from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'

import './habilidade.css'
const Habilidade = () => {
  return (
    <section id='habilidade'>
    <h5>Minhas habilidades</h5>
    <h2>Habilidades</h2>
    <div className="container habilidade__container">
      <div className="habilidade__frontend">
        <h3>Frontend Development</h3>
        <div className="habilidade__content">
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experiente</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Imtermediário</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Imtermediário</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Imtermediário</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div><h4>TypeScript</h4>
          <small className='text-light'>Básico</small></div>
          </article>
        </div>
      </div>
      <div className="habilidade__backend">
      <h3>Outras Experiências</h3>
        <div className="habilidade__content">
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div><h4>Photoshop</h4>
          <small className='text-light'>Experiente</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>Illustrator</h4>
          <small className='text-light'>Imtermediário</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>Figma</h4>
          <small className='text-light'>Imtermediário</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-light'>Básico</small>
          </div>
          </article>
          <article className='habilidade__detals'> 
          <AiFillCheckCircle className='habilidade__details-icon'/>
          <div>
          <h4>Java</h4>
          <small className='text-light'>Básico</small>
          </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Habilidade