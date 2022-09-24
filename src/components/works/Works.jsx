import React from 'react'
import './works.css'
import WORK1 from '../../assets/work1.jpg'
import WORK2 from '../../assets/work2.jpg'
import WORK3 from '../../assets/work3.jpg'

const data = [
  {
    id: 1,
    company: 'CIC LAB',
    image: WORK1
  },
  {
    id: 2,
    company: 'ICAI IIT',
    image: WORK2
  },
  {
    id: 3,
    company: 'AMAZON',
    image: WORK3
  },
]

const Works = () => {
  return (
    <section id='works'>
      <h5>Previous jobs</h5>
      <h2>Work Experience</h2>

      <div className="container works__container">
      
      {
        data.map(({id, company, image}) => {
            return (
              <article key={id} className='work'>
                <div className="company__image">
                  <img src={image} alt={company} />
                </div>
                <h3>{company}</h3>
              </article>
            )
          }
        )
      }
      </div>
    </section>
  )
}

export default Works