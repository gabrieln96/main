import React from 'react'

import {BsLinkedin, BsGithub, BsTwitter, BsInstagram} from 'react-icons/bs'


import './footer.css'

const Footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'>Gabriel Araújo</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#habilidade">Habilidades</a></li>
        <li> <a href="#services">Serviços</a></li>
        <li> <a href="#portfolio">Portfólio</a></li>
        <li> <a href="#contact">Fale Comigo</a></li>
      </ul>     

      <div className="footer__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copy">
        <small>
          &copy; Gabriel Araújo. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer