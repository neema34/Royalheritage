import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/navbar/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import Footer from "./Component/footer/Footer"
import Whatsapp from "./Component/Whatsapp/Whatsapp"




function App() {


  return (
    <>
 <Router>
      <Navbar/>
      <Whatsapp/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default  App
