import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Prime Property made finding our dream home a breeze...",
      author: "Sarah Mitchell",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "As a first-time homebuyer, I was nervous, but Prime Property guided me...",
      author: "Emily Carter",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "PrimeProperty made finding our dream home effortless!",
      author: "Michael Hernandez",
      image: "https://via.placeholder.com/80",
    },
    {
      text: "The features available on PrimeProperty’s website help me find exactly what I was looking for.",
      author: "John Doe",
      image: "https://via.placeholder.com/80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials-container">
      <div className="test-content">
        <h2>Testimonials</h2>
        <p>Our clients consistently praise our seamless service...</p>
      </div>
      <div className="testimonial-cards-wrapper">
        <div
          className="testimonial-cards"
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-button" onClick={prevSlide} disabled={currentIndex === 0}>
          ←
        </button>
        <button className="carousel-button" onClick={nextSlide} disabled={currentIndex === testimonials.length - 1}>
          →
        </button>
      </div>
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <footer classname="testi-footer">
        <p>Fill in the form below and we will get in touch</p>
      </footer>
    </div>
  );
};

export default Testimonials;
