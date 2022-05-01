import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { FaHome } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import Footer from './Footer'

class ProjectDetails extends React.Component {
   render() {
      return (
         <>
            <Header />
            <div className="about-us project-details">
               <div className="about-us-container">
                  <h1>Project Details</h1>
                  <p>
                     <FaHome className="home-icon" />
                     <Link className="home" to="/">
                        {' '}
                        Home
                     </Link>{' '}
                     / project details
                  </p>
               </div>
            </div>
            <div className="details-main row">
               <div className="details-img col-lg-8 col-md-12">
                  <img src={require('../img/projects/project21.jpg')} alt="" />
               </div>

               <div className=" details-content col-lg-4 col-md-12">
                  <h1>Project Details</h1>
                  <p>lorem ipsum dolor sit amet, consectetur adipis</p>
                  <br />
                  <h5>Client</h5>
                  <p>lorem ipsum dolor sit amet, consectetur adip</p>
                  <h5>Architect</h5>
                  <p>lorem ipsum </p>
                  <h5>Our Role</h5>
                  <p>lorem ipsum dolor sit amet, consectetur adip</p>
                  <h5>Contractor</h5>
                  <p>lorem ipsum </p>
                  <h5>Delivery Date</h5>
                  <p>2022</p>
               </div>
            </div>

            <div className="project-summary">
               <h1>Project Summary</h1>
               <p>
                  Project Summery are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn’t anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable.
               </p>
               <br />
               <ul>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
                  <li>
                     <TiTick className="tick" /> lorem ipsum dolor sit amet,
                     consectetur adipis
                  </li>
               </ul>
               <br />
               <p>
                  It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum.Lorem Ipsum as their default model text, and a search
                  for ‘lorem ipsum’ will uncover many web sites still in their
                  infancy. Various versions have evolved over the years, sometimes
                  by accident, sometimes on purpose (injected humour and the like).
               </p>
               <br />
               <div className="overview-img row">
                  <div className="col-lg-6 col-md-12 overview-img-container">
                     <img src={require('../img/details1.jpg')} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-12 overview-img-container">
                     <img src={require('../img/details2.jpg')} alt="" />
                  </div>
               </div>
               <br />
               <div className="overview-challenge">
                  <h1>Overview & Challenge</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est laborum.
                  </p>
               </div>
               <div className="solution">
                  <img src={require('../img/solution.jpg')} alt="" />
               </div>
               <div className="solution-result">
                  <h1>Solution & Results</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                     irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                     cupidatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est laborum.
                  </p>
               </div>
            </div>
            <Footer />
         </>
      )
   }
}

export default ProjectDetails
