import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-main">
        <div className="footer-logo">
          <img src="src/assets/royal.logo.png" alt="Royal Heritage Logo" />
        </div>
        <div className="detail">
          <h1>Our Office</h1>
          <ul>
            <li >
            <i id="id1" className="fa-solid fa-location-dot " ></i>
              
              <p>FORTUNE PROMOTERS<br/>
              Fortune Highway-II <br/>Main Road, Moodbidri -574227</p>
              
            </li>
            <li>
              <i id="id2" className="fa-solid fa-phone"></i>
              +91 94482 16661 <br />
              +91 702254449
            </li>

            <li>
              <i id="id3" className="fa-regular fa-envelope"></i>
              <p id="id4">royalheritagecity@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <p id="para">@2024 –Royal Heritage – All rights reserved | Designed by Vision Flow Technologies</p>
        <div className="social-icons">
          <a id="watsapp" href="/"><i className="fa-brands fa-whatsapp "></i></a>
          <a href="/"><i className="fa-brands fa-instagram"></i></a>
          <a href="/"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer