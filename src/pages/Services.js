import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'
import ServiceItem from './ServiceItem'

class Services extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <div className="about-us contact-us-main services mb-5">
               <div className="about-us-container ">
                  <h1>Our-Services</h1>
                  <p>
                     <FaHome className="home-icon" />
                     <Link className="home" to="/">
                        {' '}
                        Home
                     </Link>{' '}
                     / our-services
                  </p>
               </div>
            </div>
            <ServiceItem />
            <Footer />
         </div>
      )
   }
}
export default Services
