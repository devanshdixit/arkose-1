import React from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import Footer from './Footer'
import Header from './Header'
import { FaHome } from 'react-icons/fa'
import axios from 'axios'
import config from '../config'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class ContactUs extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }
   handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      this.setState({ [name]: value })
   }
   handleSubmit(e) {
      e.preventDefault();
      let apiUrl = `${config.api.host}/contact`

      var formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("email", this.state.email);
      formData.append("subject", this.state.subject);
      formData.append("message", this.state.message);

      axios.post(apiUrl, formData, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         if (response.data.message == 'success') {
            NotificationManager.success('', 'Thanks! we will reach you soon.');
            setTimeout(function () {
               window.location.href = '/';
            }, 3000)
         }
      })
   }
   render() {
      return (
         <>
            <Header />
            <div className="about-us contact-us-main">
               <div className="about-us-container">
                  <h1>Contact Us</h1>
                  <p>
                     <FaHome className="home-icon" />
                     <Link className="home" to="/">
                        {' '}
                        Home
                     </Link>{' '}
                     / contact us
                  </p>
               </div>
            </div>
            <Details />
            <div className="contact-us">
               <div className="contact-form">
                  <div className="form-container">
                     <h5>Get Quote</h5>
                     <h1 style={{ color: '#002156' }}>Request A Quote</h1>
                     <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} name='name' required placeholder="Enter name" />
                        <input type="email" onChange={this.handleChange} name='email' required placeholder="Enter email" />

                        <input type="text" onChange={this.handleChange} name='subject' required placeholder="Enter subject" />

                        <textarea name='message' onChange={this.handleChange} required placeholder="Enter your message"></textarea>
                        <button type="submit" id="submit">
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
               <div className="map">
                  <iframe
                     className="map-img"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457122.8586428787!2d80.0239516328125!3d26.479175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c386e6aaaaaab%3A0xb83180ebfce9442e!2sARKOSE%20BUILDCOM%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1644489831975!5m2!1sen!2sin"
                  ></iframe>
               </div>
            </div>
            <NotificationContainer />
            <Footer />
         </>
      )
   }
}

export default ContactUs
