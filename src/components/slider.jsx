import React from 'react'
import '../App.css'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


let images = [
  {
    imageUrl:`https://external-preview.redd.it/KLnRW5JtTZ1SJSDdOnGM75noq0uxLuWmjegpfLFhavw.jpg?auto=webp&s=dc3630aae0157295ceee48b9a6e0a62a31d3fde2`
  },
  {
    imageUrl:`https://get.wallhere.com/photo/AKG-headphones-1876947.jpg`
  },
  {
    imageUrl:`https://www.samma3a.com/tech/en/wp-content/uploads/sites/2/2017/11/IMG_0032-768x432.jpg`
  },
]

const Slider = () => {
  return (
    <main>
    <div className='slide-header'>
      <h3>Headphones</h3>
      <h2>From the future</h2>
      </div>
    <section id="slide-container">

      <Swiper className='slide-container'
      // install Swiper modules
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        images.map(({imageUrl}, index)=>{
          return(
            <SwiperSlide key={index} className='image-container'>
             <div class="image-container">
                 <img src={imageUrl} id="image1" alt="slideImg1" />
            </div>
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
    </main>
  )
}

export default Slider