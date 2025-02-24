import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import Whatsapp from "../Component/Whatsapp/Whatsapp";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in ms
          const stepTime = duration / end;

          const timer = setInterval(() => {
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
              start++;
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="stat" ref={ref}>
      <h3 className="stat-number">{count}+</h3>
      <p className="stat-text">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Whatsapp />
      <div className="about-container">
        {/* Hero Section */}
        <div
          className="hero-section"
          style={{ backgroundImage: `url(/Royalheritage/assets/about1.jpeg)` }}
        >
          <div className="hero-overlay">
            <h1 className="hero-text">
              At Royal Heritage, We Don’t Just Build Structures. We Build Dreams!
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <p>
            <strong>ROYAL PALMS</strong> is a combination of 33 commercial establishments and
            22 residential apartments, set in a spacious backdrop of lush greenery. It exhibits
            a genuine charm and caters to the aspirations of{" "}
            <strong>NRIs, Businessmen, and Executives</strong> looking for a mansion away from the
            hectic pace of urban living. This location is highly preferable due to its proximity to
            reputed <strong>educational institutions, resorts, religious centers, and healthcare facilities.</strong>
          </p>
          <p>
            The promoters of <strong>ROYAL HERITAGE PROJECTS</strong> have chosen a unique theme focused on
            a proactive lifestyle, where business prospers while luxury living is built into fine homes.
            Their deep understanding of real estate trends and construction advancements, particularly in
            urban and sub-urban segments, ensures high-quality development. A well-thought-out construction
            plan with <strong>standard materials</strong> further enhances the durability and aesthetics of the project.
          </p>
        </div>

        {/* Advantage Section */}
        <div className="advantage-section">
          <div className="advantage-left">
            <h2 className="advantage-heading">Discover the Royal Heritage Advantage</h2>
            <p className="advantage-text">
              Step into Royal Heritage’s legacy of <strong>excellence, integrity, and cultural ethos.</strong>
              As Mangalore’s top builders, we promise <strong>quality, fairness, and expertise.</strong>
              Discover the difference where dreams meet craftsmanship.
            </p>
            <button className="know-more">Know More</button>
          </div>

          <div className="stats">
            <Counter end={9} label="Years of Experience" />
            <Counter end={22} label="Happy Families" />
            <Counter end={5} label="Lakh Sqft Built" />
          </div>
        </div>

        {/* Leadership Section */}
        <div className="leadership-section">
          <h2 className="leadership-heading">Leading from the Forefront</h2>
          <div className="leaders">
            <img
              src="/Royalheritage/assets/about3.jpeg"
              alt="Leader 1"
              className="leader-img"
            />
            <img
              src="/Royalheritage/assets/about2.jpeg"
              alt="Leader 2"
              className="leader-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
