import React from 'react'
import axios from 'axios'
import config from '../config'
import { Parser } from 'html-to-react'

class Footer extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         logo: '',
         email: '',
         number: '',
         address: '',
         twitter: '',
         facebook: '',
         linkedin: '',
         instagram: ''
      }

      this.handleViewMore = this.handleViewMore.bind(this)
      this.handleDesigner = this.handleDesigner.bind(this)
   }

   handleViewMore(e) {
      if (e != '') {
         window.localStorage.setItem('category', e.target.className)

         var user = window.localStorage.getItem('user')
         if (user) {
            window.location.href = '/form'
         } else {
            window.location.href = '/login'
         }
      }
   }

   handleDesigner(e) {
      if (e != '') {
         window.localStorage.setItem('designer', e.target.innerHTML)

         var user = window.localStorage.getItem('user')
         if (user) {
            window.location.href = '/form'
         } else {
            window.location.href = '/login'
         }
      }
   }

   componentDidMount() {
      let apiUrl = `${config.api.host}/setting`

      axios
         .get(apiUrl, {
            crossDomain: false,
            enablePreflight: false
         })
         .then((response) => {
            var address = response.data.data[0].address.replace('<p>', '')
            address = address.replace('</p>', '')

            var email = response.data.data[0].email.split(',')
            var number = response.data.data[0].number.split(',')

            var emailData = '<p>'
            for (let i = 0; i < email.length; i++) {
               emailData +=
                  '<i className="fa fa-envelope text-primary"></i> ' +
                  email[i] +
                  '<br />'
            }
            emailData += '</p>'

            var numberData = '<p>'
            for (let i = 0; i < number.length; i++) {
               numberData +=
                  "<i className='fa fa-phone-square'></i> +91 " +
                  number[i] +
                  '<br />'
            }
            numberData += '</p>'

            this.setState({
               email: emailData,
               address: address,
               number: numberData,
               logo: response.data.data[0].logo,
               twitter: response.data.data[0].twitter,
               facebook: response.data.data[0].facebook,
               linkedin: response.data.data[0].linkedin,
               instagram: response.data.data[0].instagram
            })
         })
   }
   render() {
      const {
         address,
         number,
         email,
         logo,
         facebook,
         twitter,
         instagram,
         linkedin
      } = this.state
      return (
         <>
            <div className="footer">
               <div className="footerInfo">
                  <div className="footerContainer">
                     <div className="footerItem">
                        <div className="socialInfo">
                           <div className="">
                              <div className="mainTitle" style={{display:"flex",justifyContent:"center"}}>
                                 <img
                                    src={
                                       config.server.host +
                                       '/writable/uploads/' +
                                       logo
                                    }
                                    alt=""
                                    className="footer-logo"
                                 />
                              </div>
                              <div className="socialItem"  style={{display:"flex",justifyContent:"center"}}>
                                 <div className="socialLink facebook">
                                    <a href={facebook}>
                                       <i className="fab fa-facebook-f"></i>
                                    </a>
                                 </div>
                                 <div className="socialLink instagram">
                                    <a href={instagram}>
                                       <i className="fab fa-instagram"></i>
                                    </a>
                                 </div>
                                 <div className="socialLink twitter">
                                    <a href="https://twitter.com/arkosebuildcom">
                                       <i className="fab fa-twitter"></i>
                                    </a>
                                 </div>
                                 <div className="socialLink twitter">
                                    <a href={linkedin}>
                                       <i className="fab fa-linkedin"></i>
                                    </a>
                                 </div>
                                 <div className="socialLink twitter">
                                    <a href="https://www.youtube.com/channel/UCnFWV8WU8rsoQlzIpuaF8ug">
                                       <i className="fab fa-youtube"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <h6 style={{marginTop:"40px"}} className="addressTitle">Head Office: Kanpur</h6>
                           <p>
                              <i className="fa fa-building"></i>{' '}
                              {Parser().parse(address)}
                           </p>
                           <h6 className="addressTitle">Contact Us</h6>
                           {Parser().parse(number)}
                           <h6 className="addressTitle">Whatsapp</h6>
                           <p>
                              <i className="fab fa-whatsapp text-success"></i>{' '}
                              9336080809
                           </p>
                           <h6 className="addressTitle">Mail Us</h6>
                           {Parser().parse(email)}
                        </div>

                        <div className="socialInfo" style={{
                           maxWidth:"200px",
                           width:"100%",
                           marginLeft:"auto",
                           marginRight:"auto"
                        }}>
                           <div className="mainTitle">
                              <h4>
                                 {' '}
                                 Our Map Services <span></span>
                              </h4>
                           </div>
                           <div className="socialItem">
                              <a
                                 href="javascript:void(0)"
                                 className="Residential"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Residential
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Commercial"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Commercial
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="High Rise building"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 High Rise building
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Interior Design"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Interior Design
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Row House"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Row House
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Hotel Design & Development"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Hotel Design & Development
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Hospital Design & Development"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Hospital Design & Development
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Farm House"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Farm House
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Plotting"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Plotting
                              </a>
                              <a
                                 href="javascript:void(0)"
                                 className="Bungalow Design"
                                 onClick={this.handleViewMore}
                              >
                                 {' '}
                                 Bungalow Design
                              </a>
                           </div>
                        </div>

                        <div className="socialInfo" style={{
                           maxWidth:"564px",
                           width:"100%"
                        }}>
                           <div className="mainTitle">
                              <h4>
                                 {' '}
                                 Our Designer Services <span></span>
                              </h4>
                           </div>
                           <div className="socialItem "
                           style={{
                              display:"flex",
                              color:"white"
                           }}>
                              <div>
                              <p>BY CIVIL ENGINEER</p>
                              <ul>
                                 <li onClick={this.handleDesigner}>
                                    Structure
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Civil Working Details
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Estimation Service
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Supervision
                                 </li>
                              </ul>
                              </div>
                              <div>
                              <p>BY ARCHITECT</p>
                              <ul>
                                 <li onClick={this.handleDesigner}>
                                    Floor Planning
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Vastu Consultancy
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Presentation Planning
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Exterior Elevation
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    3D Perspective View
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Renovation & Remodeling
                                 </li>
                              </ul>
                              </div>
                              <div>
                              <p>BY INTERIOR DESIGNER</p>
                              <ul>
                                 <li onClick={this.handleDesigner}>
                                    Interior Design
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    False Ceilling
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    3D Interior Floor Plan
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Wardrobe Design
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Bed Design
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Modular Kitchen
                                 </li>
                                 <li onClick={this.handleDesigner}>
                                    Supervision
                                 </li>
                              </ul>
                              </div>
                           </div>
                        </div>

                        {/* <div className="socialInfo">
                           <div className="mainTitle">
                              <h4>
                                 {' '}
                                 Address <span></span>
                              </h4>
                           </div>
                           <h6 className="addressTitle">Head Office: Kanpur</h6>
                           <p>
                              <i className="fa fa-building"></i>{' '}
                              {Parser().parse(address)}
                           </p>
                           <h6 className="addressTitle">Contact Us</h6>
                           {Parser().parse(number)}
                           <h6 className="addressTitle">Whatsapp</h6>
                           <p>
                              <i className="fab fa-whatsapp text-success"></i>{' '}
                              7007022736
                              <br />
                              <i className="fab fa-whatsapp text-success"></i>{' '}
                              9336080809
                           </p>
                           <h6 className="addressTitle">Mail Us</h6>
                           {Parser().parse(email)}
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default Footer
