import React from 'react'
import "./Discover.css"
import { useNavigate } from 'react-router-dom'
const Discover = () => {
  const navigate= useNavigate();
  return (
    <div className='discover'>
      <div className="discover-head">
      <h1>Live Extraordinarily</h1>
      <p>Discover a home that's as unique as your fingerprint where luxury isn't just seen, but felt in every corner.</p>
      </div>
      <div className="discover-c">
        <div className="advantage">
          <h1>Discover the Royal Heritage <br/>Advantage</h1>
          <p>Step into Royal Heritage's legacy of excellence, integrity, and<br/> cultural ethos. As Mangalore's top builders, we promise quality,<br/> fairness, and expertise. Discover the difference where dreams<br/> meet craftsmanship.</p>
          
          <button id="knowmore" onClick={()=>navigate('/about')}>Know More</button>
        </div>
        <div className="experience">
          <div className='ex'>
          <span>9+</span>
          <p>Year of Experience</p>
        </div>
          <hr/>
          <div className='ex'>
          <span>22+</span>
          <p>Happy Families</p>
        </div>
          <hr/>
          <div className='ex'>
          <span>5+</span>
         <p>Lakh Sqft Built</p>
        </div>
        <hr/>
      </div>
      
    </div>
    </div>
  )
}

export default Discover