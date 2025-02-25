import React from 'react'
import Header from '../Component/Header/Header'
import Discover from '../Component/Discover/Discover'
import Feedback from '../Component/Feedback/Feedback'
import Testimonials from '../Component/Testimonials/Testimonials'
import Location from '../Component/Location/Location'

const Home = () => {
  return (
    <div> 
        <Header/>
        <Discover/>
        <Location/>
        <Testimonials/>
        <Feedback/>
    </div>
  )
}

export default Home