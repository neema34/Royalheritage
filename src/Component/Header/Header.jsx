import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const images = [
   "/Royalheritage/assets/header.jpg",
  "/Royalheritage/assets/pro1.jpg"
];


const Header = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="header-container">
      {/* Slideshow */}
      <div className="slideshow" onClick={handleNextClick}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url("${img}")` }}
            role="img"
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="header-text">
        <h1>Royal Palms</h1>
        <p>Stylish Spacious 2, 3 BHK and Duplex Apartments at the Mother of Seeds Bajpe</p>
        <button className="view-project-btn" onClick={() => navigate('/project')}>
          View Project
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
