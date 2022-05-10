/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import axios from 'axios'
import config from '../config'

class ClientSlider extends React.Component {
   constructor(props) {
      super(props)
      {
         this.state = {
            testimonial: [],
         }
      }
   }
   componentDidMount() {
      let apiUrl = `${config.api.host}/get_testimonial`

      axios.get(apiUrl, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         this.setState({
            testimonial: response.data.data,
         })
      })
   }
   render() {
      return (
         <>
            <div className="client-container" style={{ padding: '100px 0px' }}>
               <div className="container">
                  <h5 style={{ color: 'white' }}>| Our Client Say</h5>
                  <h1 style={{ color: '#fff', fontSize: '48px' }}>
                     Clients Say About Us
                  </h1>
                  <Swiper
                     modules={[Autoplay]}
                     spaceBetween={30}
                     autoplay={{ delay: 3000 }}
                     breakpoints={{
                        // When window width is >= 640px
                        640: {
                           width: 640,
                           slidesPerView: 1
                        },
                        // When window width is >= 768px
                        768: {
                           width: 768,
                           slidesPerView: 2
                        }
                     }}
                  >
                     {this.state.testimonial && this.state.testimonial.map((item, index) => {
                        return (<SwiperSlide className="slider ">
                           <div className="client-card">
                              <div
                                 className="client-card-wrapper"
                                 style={{ padding: '40px' }}
                              >
                                 <div
                                    style={{
                                       display: 'flex',
                                       justifyContent: 'space-between',
                                       width: '100%'
                                    }}
                                 >
                                    <div style={{ display: 'flex' }}>
                                       <img
                                          style={{
                                             height: '90px',
                                             width: '90px',
                                             marginRight: '10px'
                                          }}
                                          src={config.server.host + '/writable/uploads/' + item.image}
                                       />
                                       <div>
                                          <h5 style={{ marginBottom: '0px' }}>
                                             {item.name}
                                          </h5>
                                          <p className="client-location">
                                             {item.address}
                                          </p>
                                       </div>
                                    </div>
                                    <div>
                                       <FaStar className="stars" />
                                       <FaStar className="stars" />
                                       <FaStar className="stars" />
                                       <FaStar className="stars" />
                                       <FaStar className="stars" />
                                    </div>
                                 </div>
                                 <div style={{ display: 'flex', marginTop: '20px' }}>
                                    <FaQuoteLeft id="quote" />
                                    <p className="client-text">
                                       {item.description}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                        )
                     })}
                  </Swiper>
               </div>
            </div>
         </>
      )
   }
}

export default ClientSlider
