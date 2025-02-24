import React from 'react';
import "./Location.css"
import topright from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/img1.jpg"
import middlee from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/img2.jpg"
import bottom from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/img3.jpg"
function Location() {
  return (
    <div>
       <section className="why-choose-us">
      <div className="text-container">
        <div>

        <h2 className="title">Why Choose Us?</h2>
        <p className="subtitle">
          Discover Your Dream Property with Us: Your<br/> Journey Starts Here!</p>
        </div>
        <p className="subsubtitle">Our extensive selection of top-tier properties is here to cater to<br/> your unique needs and preferences. Whether you’re seeking a <br/>cozy family home, or your dream retreat, we’re committed to<br/> helping you make the right choice.</p>
      </div>
      
      <div className="content-container">
        <div className="image-group">
          <img src={topright} alt="Beautiful nature view" className="overlay-image top-right" />
          <img src={middlee} alt="Beautiful nature view" className="main-image" />
          <img src={bottom} alt="Beautiful nature view" className="overlay-image bottom-left" />
        </div>
        <div className="text-group">
          <div className="text-item">
            <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div>
              <h3 className="text-title">Leadership in Expertise and Vision</h3>
              <p className="text-body">
                Fortune stands out as a leader in the real estate industry due to
                its unparalleled expertise and a long history of successfully
                delivering high-quality developments. With years of experience,
                Fortune has consistently pushed the boundaries of construction
                and design.
              </p>
            </div>
          </div>

          <div className="text-item">
            <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
            <div>
              <h3 className="text-title">Prime Locations for Lasting Value</h3>
              <p className="text-body">
                Strategic location selection is key to Fortune’s success. The
                company consistently identifies and develops properties in prime
                locations that promise both convenience and growth potential.
                Whether it’s a residential neighborhood offering peace and
                privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}

export default Location