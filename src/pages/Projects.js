import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { FaHome } from 'react-icons/fa'
import axios from 'axios'
import config from '../config'

class Projects extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         project: []
      }

      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(e) {
      console.log(e);
   }

   componentDidMount() {
      let apiUrl = `${config.api.host}/get_project/project`

      axios.get(apiUrl, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         this.setState({
            project: response.data.project,
         })
      })
   }
   render() {
      return (
         <>
            <div className="projects">
               <Header />
               <div className="about-us">
                  <div className="about-us-container">
                     <h1>Our Projects</h1>
                     <p>
                        <FaHome className="home-icon" />
                        <Link className="home" to="/">
                           {' '}
                           Home
                        </Link>{' '}
                        / projects
                     </p>
                  </div>
               </div>
               <div className="container my-4">
                  <div className=" row proj-category">
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>All</a>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>
                           Architecture
                        </a>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>Interior</a>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>Construction</a>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>
                           Project Planning
                        </a>
                     </div>
                     <div className="col-lg-2 col-md-4 col-sm-4 category-tab">
                        <a>
                           Renovation
                        </a>
                     </div>
                  </div>
               </div>

               <div className="gallery row">
                  {this.state.project && this.state.project.map((value, index) => {
                     return (
                        <div className="gallery-img-wrapper col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
                           <img
                              className="gallery-img img-fluid"
                              src={config.server.host + '/writable/uploads/' + value.image}
                              alt=""
                           />
                           {/* <div className="gallery-overlay">
                              <a onClick={this.handleChange(value.id)}>See More</a>
                           </div> */}
                        </div>
                     )
                  })}
               </div>

               <Footer />
            </div>
         </>
      )
   }
}

export default Projects
