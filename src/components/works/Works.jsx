import React from 'react'
import './works.css'
import WORK1 from '../../assets/work1.jpg'
import WORK2 from '../../assets/work2.jpg'
import WORK3 from '../../assets/work3.jpg'
import WORK4 from '../../assets/work4.jpg'

// core version + navigation, pagination modules:
import { Autoplay, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    company: 'CIC LAB',
    position: 'Data Scientist',
    image: WORK1
  },
  {
    id: 2,
    company: 'ICAI IIT',
    position: 'Data Scientist',
    image: WORK2
  },
  {
    id: 3,
    company: 'Saargummi',
    position: 'Data Scientist',
    image: WORK3
  },
  {
    id: 4,
    company: 'AMAZON',
    position: 'Business Intelligence Engineer / Fullstack Developer',
    image: WORK4
  },
]

const Works = () => {
  return (
    <section id='works'>
      <h5>Previous jobs</h5>
      <h2>Work Experience</h2>

      <Swiper className="container works__container"
      // install Swiper modules
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id, company, position, image}) => {
              return (
                <SwiperSlide key={id} className='work'>
                  <div className="company__image">
                    <img src={image} alt={company} />
                  </div>
                  <h5 className='company__name'>{company}</h5>
                  <small className='position'>{position}</small>
                </SwiperSlide>
              )
            }
          )
        }
      </Swiper>
    </section>
  )
}

export default Works