import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../img/logo-white.png'
import iso from '../img/iso.png'
import { Link } from 'react-router-dom'

class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         user: window.localStorage.getItem('user'),
         guest: window.localStorage.getItem('guest')
      }
   }
   render() {
      const { user, guest } = this.state
      return (
         <>
            <Navbar
               className="nav"
               sticky="top"
               expand="lg"
               style={{ paddingTop: '0px', paddingBottom: '0px' ,height:"130px"}}
            >
               <Navbar.Brand className="logo-container" style={{height:"auto"}}>
                  <img
                     src={logo}
                     className="logo"
                     width='189.69px'
                     height='100px'
                     style={{ height: '100px',width:'233.69px' }}
                  />
               </Navbar.Brand>

               <Navbar.Toggle className="hamburger" />
               <Navbar.Collapse className="justify-content-end">
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px'
                     }}
                  >
                     <div style={{
                        display:'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                     }}>
                     <p className="contact-info">
                        +91 7007022736 / arkosebuildcom@gmail.com
                     </p>
                     <img
                     src={iso}
                     style={{ height: 'auto',width:'100%',
                           maxHeight:"30px",
                           maxWidth:"30px",
                           marginRight:"2.5%",
                           marginBottom:'2%'
                  }}
                  />
                     </div>

                     <Nav className="nav-link-container">
                        <Nav.Link>
                           <Link className="nav-link" to="/">
                              Home
                           </Link>
                        </Nav.Link>
                        <Nav.Link>
                           <Link className="nav-link" to="/about">
                              About
                           </Link>
                        </Nav.Link>
                        <Nav.Link>
                           <Link className="nav-link" to="/services">
                              Services
                           </Link>
                        </Nav.Link>
                        <Nav.Link>
                           <Link className="nav-link" to="/projects">
                              Projects
                           </Link>
                        </Nav.Link>
                        <Nav.Link>
                           <Link className="nav-link" to="/contact">
                              Contact Us
                           </Link>
                        </Nav.Link>
                        <Nav.Link>
                           <Link
                              className="nav-link"
                              to={user || guest ? '/form' : '/login'}
                           >
                              Custom Map Requirement
                           </Link>
                        </Nav.Link>
                        {user ? (
                           <Nav.Link>
                              <Link className="nav-link" to="/dashboard">
                                 My Account
                              </Link>
                           </Nav.Link>
                        ) : (
                           <></>
                        )}
                     </Nav>
                  </div>
               </Navbar.Collapse>
            </Navbar>
         </>
      )
   }
}

export default Header
