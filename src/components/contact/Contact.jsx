import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp, BsTwitter} from 'react-icons/bs'
import './contact.css'

import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dh783zc', 'template_0frrjr6', form.current, 'G_a_eIAG5V8a7Rpen')
      e.target.reset()
  }; 

  return (
    <section id='contact'>
      <h5>Entre Em Contato</h5>
      <h2>Fale Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gabrielaraujo.n6@gmail.com</h5>
            <a href="mailto:gabrielaraujo.n6@gmail.com"target='_blank'>Envie uma mensagem</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+ 55 98 9 8168-7928</h5>
            <a href="https://api.whatsapp.com/send?phone=5598981687928" target='_blank'>Envie uma mensagem</a>
           </article>
           <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@araujogabriel__</h5>
            <a href="https://twitter.com/araujogabriel__?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-dnt="true" data-show-count="false" target='_blank'>Envie uma mensagem</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome Completo' required/>
          <input type="email" name='email' placeholder='Seu Email' required/>
          <textarea name="message" rows="6" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Envia sua Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact