import React from 'react'
import './footer.css'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ansasi</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Personal website. Created in 2022</small>
      </div>
    </footer>
  )
}

export default Footer