import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Team from './Team'
import Category from './Category'
import Designer from './Designer'
import ServiceItem from './ServiceItem'
import { FaUsers, FaRegEdit, FaPhone } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { GiArrowScope } from 'react-icons/gi'
import { FcIdea } from 'react-icons/fc'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import ClientSlider from './ClientSlider'
import axios from 'axios'
import config from '../config'
import { Parser } from 'html-to-react'

class Home extends React.Component {
   constructor(props) {
      super(props)
      {
         this.state = {
            banner: '',
            chooseUs: [],
            banner_img: '',
            who_we_are: '',
            who_we_are_img: '',
            work_excellence: '',
            work_excellence_img: ''
         }
      }
   }
   componentDidMount() {
      let apiUrl = `${config.api.host}/content/home`

      axios
         .get(apiUrl, {
            crossDomain: false,
            enablePreflight: false
         })
         .then((response) => {
            this.setState({
               who_we_are: response.data.data[0].content,
               who_we_are_img: response.data.data[0].thumbnail,
               banner: response.data.data[1].content,
               banner_img: response.data.data[1].thumbnail,
               work_excellence: response.data.data[2].content,
               work_excellence_img: response.data.data[2].thumbnail
            })
         })

      let apiUrl_choose = `${config.api.host}/get_choose_us`

      axios
         .get(apiUrl_choose, {
            crossDomain: false,
            enablePreflight: false
         })
         .then((response) => {
            this.setState({
               chooseUs: response.data.data
            })
         })
   }
   render() {
      return (
         <>
            <Header />
            <div className="main-section">
               <div className="main-container">
                  {Parser().parse(this.state.banner)}
                  <span className="float-call" syle={{ color: 'white' }}>
                     <FaPhone />
                  </span>
                  <span className="float-whatsapp" syle={{ color: 'white' }}>
                     <BsWhatsapp />
                  </span>
               </div>
            </div>
            <Designer />
            <Category />
            <ServiceItem />
            <div
               className="constrcution-eng row"
               style={{ margin: '-80px 0px', padding: '60px 0px' }}
            >
               <div
                  className="constrcution-eng-text col-xl-6 col-lg-6 col-md-12 "
                  style={{ padding: '0px 60px' }}
               >
                  {Parser().parse(this.state.work_excellence)}

                  <button id="view-more">
                     <span>View More</span>
                  </button>
               </div>
               <div className="col-lg-6" style={{ padding: '0px' }}>
                  <img
                     alt=""
                     style={{
                        width: '100%',
                        height: '90%',
                        padding: '20px 30px 60px 30px ',
                        paddingBottom: '80px'
                     }}
                     src={
                        config.server.host +
                        '/writable/uploads/' +
                        this.state.work_excellence_img
                     }
                  />
               </div>
            </div>

            <div className="container-fluid">
               <div className="facts row">
                  <div className="col-lg-12 col-md-12 text-center mb-4">
                     <h1 className="text-light">How It Works</h1>
                  </div>
                  <div className="facts-container col-lg-3 col-md-6 ">
                     <FaRegEdit className="icon" />
                     <h3>STEP 1</h3>
                     <h6>
                        Shortlist your designs which meets your requirements.
                     </h6>
                  </div>
                  <div className="facts-container col-lg-3 col-md-6">
                     <FcIdea className="icon" />
                     <h3>STEP 2</h3>
                     <h6>
                        Discuss this plan with our experts and buy the designs.
                     </h6>
                  </div>
                  <div className="facts-container col-lg-3 col-md-6">
                     <FaUsers className="icon" />
                     <h3>STEP 3</h3>
                     <h6>Our team will work on your selected designs.</h6>
                  </div>
                  <div className="facts-container col-lg-3 col-md-6">
                     <GiArrowScope className="icon" />
                     <h3>STEP 4</h3>
                     <h6>
                        Get all the designs in your hand and start building.
                     </h6>
                  </div>
               </div>
            </div>
            <div className="expert-team ">
               <div className="team-section">
                  <h6>| Would Like To Hear From You!</h6>
                  <h1>Our Expert Team</h1>
                  <Team />
               </div>
            </div>

            {/* <div className="container">
               <div className="who-we-are row" style={{ margin: '60px 0px' }}>
                  <div className="col-lg-6 col-md-12">
                     <img
                        style={{ width: '100%' }}
                        src={config.server.host + '/writable/uploads/' + this.state.who_we_are_img}
                        alt=""
                     />
                  </div>
                  <div
                     className="who-we-are-text col-lg-6 col-md-12"
                     style={{ padding: '40px' }}
                  >
                     <h2 style={{ color: '#002156' }}>WHO WE ARE</h2>
                     {Parser().parse(this.state.who_we_are)}
                     <button id="learn-services">
                        <Link
                           style={{ textDecoration: 'none', color: '#fff' }}
                           to="/services"
                        >
                           LEARN OUR SERVICES
                        </Link>
                     </button>
                  </div>
               </div>
            </div> */}
            <div className="container">
               <div
                  className="why-choose-us row"
                  style={{
                     marginBottom: '40px'
                  }}
               >
                  <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>
                     WHY CHOOSE US?
                  </h1>
                  {this.state.chooseUs &&
                     this.state.chooseUs.map((item, index) => {
                        return (
                           <div
                              className="col-lg-3 col-md-6 col-sm-12"
                              style={{ marginBottom: '20px' }}
                           >
                              <div
                                 className="card-choose-us"
                                 style={{ width: '100%' }}
                              >
                                 <img
                                    style={{ width: '100%' }}
                                    src={
                                       config.server.host +
                                       '/writable/uploads/' +
                                       item.image
                                    }
                                    alt=""
                                 />
                                 <div className="choose-us-content">
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
               </div>
            </div>
            <ClientSlider />
            <Footer />
         </>
      )
   }
}

export default Home
