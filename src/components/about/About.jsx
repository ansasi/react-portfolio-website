import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineTask} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>
                4+ Years Programming<br />
                3+ Years Working in Backend<br />
                1+ Years Working as Fullstack Developer
              </small>
            </article>
            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>
                200+ Clients Worldwide
              </small>
            </article> */}
            <article className='about__card'>
              <MdOutlineTask className='about__icon'/>
              <h5>Experience</h5>
              <small>
                10+ Completed projects
              </small>
            </article>
          </div>

          <p>
            Industrial engineer. In love with big data, programming and cloud.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About