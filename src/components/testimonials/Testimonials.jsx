import React from 'react'

import './testimonials.css'

import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de clientes</h5>
      <h2>Testemunhos</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
            <div className="client__avatar">
                <img src={AVR1} alt="Avatar Um" />
                <h5 className='client__name'>Teste teste</h5>
            </div>
            <small className='client__review'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil, culpa debitis itaque atque tempore odio sit nisi minima illo, magni recusandae earum nulla nesciunt saepe cum velit quia distinctio?
                </small>
          </article>
          
          <article className="testimonial">
            <div className="client__avatar">
                <img src={AVR1} alt="Avatar Um" />
                <h5 className='client__name'>Teste teste</h5>
            </div>
            <small className='client__review'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil, culpa debitis itaque atque tempore odio sit nisi minima illo, magni recusandae earum nulla nesciunt saepe cum velit quia distinctio?
                </small>
          </article>

          <article className="testimonial">
            <div className="client__avatar">
                <img src={AVR1} alt="Avatar Um" />
                <h5 className='client__name'>Teste teste</h5>
            </div>
            <small className='client__review'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil, culpa debitis itaque atque tempore odio sit nisi minima illo, magni recusandae earum nulla nesciunt saepe cum velit quia distinctio?
                </small>
          </article>
          
          <article className="testimonial">
            <div className="client__avatar">
                <img src={AVR1} alt="Avatar Um" />
                <h5 className='client__name'>Teste teste</h5>
            </div>
            <small className='client__review'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil, culpa debitis itaque atque tempore odio sit nisi minima illo, magni recusandae earum nulla nesciunt saepe cum velit quia distinctio?
                </small>
          </article>
          
        </div>
    </section>
  )
}

export default Testimonials