import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/avatar.jpeg'
import AVT2 from '../../assets/avatar.jpeg'
import AVT3 from '../../assets/avatar.jpeg'
import AVT4 from '../../assets/avatar.jpeg'

import { Pagination,Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVT1,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
    deserunt explicabo nostrum ducimus quasi?`
  },
  {
    avatar: AVT2,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
    deserunt explicabo nostrum ducimus quasi?`
  },
  {
    avatar: AVT3,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
    deserunt explicabo nostrum ducimus quasi?`
  },
  {
    avatar: AVT4,
    name: 'Tina Snow',
    review: `Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro
    blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores
    deserunt explicabo nostrum ducimus quasi?`
  },
]

const testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >

        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

        
      </Swiper>

    </section>
  )
}

export default testimonial
