import React, { useState } from "react";
import "./Project.css";
import proj2 from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/proj2.jpg";
import proj3 from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/proj3.jpg";
import proj4 from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/proj4.jpg";
import proj5 from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/proj5.jpg";


const images = [
  "/src/assets/pro1.jpg",
  "/src/assets/tower.bg.jpg",
  "/src/assets/Group1.jpg",
  "/src/assets/city.jpg",
  "/src/assets/header.jpg",
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="header-container">
      <div className="slideshow" onClick={handleNextClick}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : "inactive"}`}
            style={{ backgroundImage: `url(${img})` }}
            role="img"
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          >
            <span className="dot-content"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

const RoyalPalms = () => {
  const galleryImages = [
    "/src/assets/city.jpg",
    "/src/assets/cont.jpg",
    "/src/assets/header.jpg",
    "/src/assets/city.jpg",
  ];

  return (
    <div className="royal-palms-container">
      <Header />

      <div className="project-details">
        <img src={proj2} alt="Royal Palms Logo" className="project-logo" />

       
        <div className="details-container">
          <div className="detail-row">
            <div className="detail-item"><h4>Location</h4><p>Alangar, Moodbidri</p></div>
            <div className="detail-item"><h4>Approved By</h4><p>PRM/KA/RERA/1257/478 <br/> /PR/210810/004253</p></div>
          </div>
          <div className="detail-row">
            <div className="detail-item"><h4>Type</h4><p>Residential & Commercial</p></div>
            <div className="detail-item"><h4>Area</h4><p>Residential & Commercial</p></div>
          </div>
          <div className="detail-row">
            <div className="detail-item"><h4>Completion Date</h4><p>26-12-2022</p></div>
            <div className="detail-item"><h4>Flat Size</h4><p>1095 Sqft - 1700 Sqft</p></div>
          </div>
        </div>
      </div>

      <h1 className="title1">Where Life and Business Take Swings<br/>Royal Palms</h1>
      <p className="description ">
        <br></br>
  Experience the perfect blend of modern living and thriving business at  <strong>ROYAL PALMS</strong>, a premier mixed-use community designed for those 
  who seek convenience, elegance, and exclusivity. Whether you're looking for 
  sophisticated residential apartments or high-potential commercial spaces, ROYAL PALMS 
  offers the ideal setting to live, work, and grow. Nestled amidst lush greenery in 
  Alangar, Moodbidri, this thoughtfully planned development features 33 premium 
  commercial establishments and 22 stylish residential apartments, providing a 
  seamless lifestyle for NRIs, business professionals, and executives.
  
  With renowned educational institutions, resorts, religious landmarks, and healthcare 
  centers just minutes away, everything you need is within easy reach. Crafted by 
  ROYAL HERITAGE PROJECTS, ROYAL PALMS is built with exceptional quality, innovative 
  architecture, and enduring value—ensuring a life of comfort, success, and distinction.
  
</p>
<br></br>

      <div className="button-group">
        <button className="info-button">Brochure</button>
        <button className="info-button">Gallery</button>
        <button className="info-button">Floor Plan</button>
        <button className="info-button">Location</button>
      </div>
      <br></br>
      <br></br>
      <h1 className="title2">Where Life and Business Take Swings<br/>Royal Palms</h1>
    
      <div className="facility-icons">
        <div className="facility-item">
          <img src={proj3} alt="error loading.." />
          <br></br>
          <p>Gym & Fitness Center</p>
        </div>
        <div className="facility-item">
          <img src={proj4} alt="error loading.." />
          <br></br>
          <p>Reticulated Gas</p>
        </div>
        <div className="facility-item">
          <img src={proj5} alt="error loading.." />
          <br></br>
          <p>Kids Play Area</p>
        </div>
      </div>
      <br></br>
      <br></br>
     
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery">
        {galleryImages.map((imgSrc, index) => (
          <div className="gallery-item" key={index}>
            <img src={imgSrc} alt={`Gallery Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoyalPalms;

