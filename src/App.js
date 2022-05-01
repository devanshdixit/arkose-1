import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import ProjectDetails from './pages/ProjectDetails'
import Home from './pages/Home'
import Form from './pages/Form'
import Pay from './pages/Pay'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<AboutUs />} />
               <Route path="/services" element={<Services />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/contact" element={<ContactUs />} />
               <Route path="/details" element={<ProjectDetails />} />
               <Route path="/form" element={<Form />} />
               <Route path="/pay" element={<Pay />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
