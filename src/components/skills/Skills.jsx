import React from 'react'
import './skills.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckCircleFill className="skills__details-icon"/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills