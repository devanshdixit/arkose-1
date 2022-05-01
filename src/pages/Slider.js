import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
   return (
      <>
         <div className="container">
            <Swiper
               modules={[Autoplay]}
               spaceBetween={0}
               autoplay={{ delay: 2000 }}
               breakpoints={{
                  // when window width is >= 640px
                  640: {
                     width: 640,
                     slidesPerView: 1
                  },
                  // when window width is >= 768px
                  768: {
                     width: 768,
                     slidesPerView: 2
                  }
               }}
            >
               <SwiperSlide className="slider">
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img1.jpg')}
                     />
                     <h4>CONSTRUCTION SITE</h4>
                     <h6>Construction And Civil Work</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img2.jpg')}
                     />
                     <h4>FARM HOUSE</h4>
                     <h6>Architecture</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img3.jpg')}
                     />
                     <h4>MODERN HOUSE</h4>
                     <h6>Renovation</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img4.jpg')}
                     />
                     <h4>OFFICE</h4>
                     <h6>Interior Design</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img5.jpg')}
                     />
                     <h4>BUILDING CONSTRUCTION</h4>
                     <h6>Construction And Civil Work</h6>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="our-work-card">
                     <img
                        className="card-img"
                        src={require('../img/img6.jpg')}
                     />
                     <h4>LIVING ROOM IDEAS</h4>
                     <h6>Interior Design</h6>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   )
}

export default Slider
