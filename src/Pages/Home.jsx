import React from 'react'
import Header from '../Component/Header/Header'
import Discover from '../Component/Discover/Discover'
import Feedback from '../Component/Feedback/Feedback'
import Testimonials from '../Component/Testimonials/Testimonials'
import Location from '../Component/Location/Location'
import Navbar from "../Component/navbar/Navbar"
import Footer from "../Component/footer/Footer"
const Home = () => {
  return (
    <div> 
      <Navbar/>
        <Header/>
        <Discover/>
        <Location/>
        <Testimonials/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home