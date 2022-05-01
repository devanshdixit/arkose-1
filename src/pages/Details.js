import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn, MdMail } from 'react-icons/md'
import axios from 'axios'
import config from '../config'
import { Parser } from 'html-to-react'

class Details extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         address: '',
         number: '',
         email: '',
      }
   }
   componentDidMount() {
      let apiUrl = `${config.api.host}/setting`

      axios.get(apiUrl, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         var address = response.data.data[0].address.replace("<p>", "");
         address = address.replace("</p>", "");

         var email = response.data.data[0].email.split(',');
         var number = response.data.data[0].number.split(',');

         var emailData = '<h6>';
         for (let i = 0; i < email.length; i++) {
            emailData += email[i] + '<br />';
         }
         emailData += '</h6>';

         var numberData = '<h6>';
         for (let i = 0; i < number.length; i++) {
            numberData += "+91 " + number[i] + '<br />';
         }
         numberData += '</h6>';

         this.setState({
            email: emailData,
            address: address,
            number: numberData,
         })
      })
   }
   render() {
      return (
         <div className="details container">
            <div className="row details-container">
               <div className="col-lg-4 col-md-6 details-card">
                  <div className="details-card-container ">
                     <MdLocationOn className="details-icon" />
                     <h1>Our Location</h1>
                     <h6>
                        {Parser().parse(this.state.address)}
                     </h6>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6 details-card">
                  <div className="details-card-container">
                     <BsFillTelephoneFill className="details-icon" />
                     <h1>Contact</h1>
                     {Parser().parse(this.state.number)}
                  </div>
               </div>
               <div className="col-lg-4 col-md-12 details-card">
                  <div className="details-card-container">
                     <MdMail className="details-icon" />
                     <h1>Email</h1>
                     {Parser().parse(this.state.email)}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Details
