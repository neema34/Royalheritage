import Footer from "./Component/footer/Footer"
import Navbar from "./Component/navbar/Navbar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import {BrowserRouter as  Router, Routes,Route, } from 'react-router-dom'
import Project from "./Pages/Project"

function App() {


  return (
    <>
    <Router>
      <Navbar/>
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

export default App
