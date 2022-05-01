import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const CompaniesSlider = () => {
   return (
      <>
         <div className="container">
            <Swiper
               modules={[Autoplay]}
               spaceBetween={10}
               autoplay={{ delay: 2000 }}
               breakpoints={{
                  // when window width is >= 640px
                  640: {
                     width: 640,
                     slidesPerView: 4
                  },
                  // when window width is >= 768px
                  768: {
                     width: 768,
                     slidesPerView: 5
                  }
               }}
            >
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp1.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp2.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp3.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp4.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp5.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp6.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp7.png')} />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div>
                     {' '}
                     <img src={require('../img/comp8.png')} />
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   )
}

export default CompaniesSlider
