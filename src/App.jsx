import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
import WhatsAppButton from "./Component/Whatsapp";



function App() {


  return (
    <>
    <Router>
    <WhatsAppButton /> 
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
