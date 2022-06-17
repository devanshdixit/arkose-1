import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Footer from './Footer'
import Team from './Team'
import axios from 'axios'
import config from '../config'
import { Parser } from 'html-to-react'

class AboutUs extends React.Component {
   constructor(props) {
      super(props)
      {
         this.state = {
            about: '',
            construction: '',
            construction_img: ''
         }
      }
   }
   componentDidMount() {
      let apiUrl = `${config.api.host}/content/about`

      axios.get(apiUrl, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         this.setState({
            about: response.data.data[1].content,
            construction: response.data.data[0].content,
            construction_img: response.data.data[0].thumbnail,
         })
      })
   }
   render() {
      return (
         <>
            <Header />
            <div className="about-us-wrapper">
               <div className="about-us">
                  <div className="about-us-container">
                     <h1>About Us</h1>
                     <p>
                        <FaHome className="home-icon" />
                        <Link className="home" to="/">
                           {' '}
                           Home
                        </Link>{' '}
                        / about us
                     </p>
                     {/* <p className="container">
                        {Parser().parse(this.state.about)}
                     </p> */}
                  </div>
               </div>
            </div>
            <div className="experience-section">
               <div className="col-lg-6 col-md-10 col-sm-12 ">
                  <img
                     style={{ width: '100%' }}
                     src={config.server.host + '/writable/uploads/' + this.state.construction_img}
                     alt=""
                  />
               </div>
               <div className="experience-container">
                  {Parser().parse(this.state.construction)}
               </div>
            </div>
            <div className="team-section container">
               <h5>Our team</h5>
               <h1>Our Motivated Team</h1>
               <Team />
            </div>
            <Footer />
         </>
      )
   }
}

export default AboutUs
