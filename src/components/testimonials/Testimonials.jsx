import React from 'react'

import './testimonials.css'

import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVR1,
    name: 'Pessoa 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae earum nesciunt impedit illo, exercitationem ex sint maxime delectus ab.'
  },
  {
    avatar: AVR2,
    name: 'Pessoa 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae earum nesciunt impedit illo, exercitationem ex sint maxime delectus ab.'
  },
  {
    avatar: AVR3,
    name: 'Pessoa 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae earum nesciunt impedit illo, exercitationem ex sint maxime delectus ab.'
  },
  {
    avatar: AVR4,
    name: 'Pessoa 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae earum nesciunt impedit illo, exercitationem ex sint maxime delectus ab.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de clientes</h5>
      <h2>Testemunhos</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={30}
         slidesPerView={1}
         pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
                <img src={avatar}/>
                <h5 className='client__name'>{name}</h5>
            </div>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
      }
          
      
          
        </Swiper>
    </section>
  )
}

export default Testimonials