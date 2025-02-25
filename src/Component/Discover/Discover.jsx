import React, { useEffect, useState } from 'react';
import "./Discover.css";
import { useNavigate } from 'react-router-dom';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
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

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="ex">
      <span>{count}+</span>
      <p>{label}</p>
    </div>
  );
};

const Discover = () => {
  const navigate = useNavigate();

  return (
    <div className='discover'>
      <div className="discover-head">
        <h1>Live Extraordinarily</h1>
        <p>Discover a home that's as unique as your fingerprint where luxury isn't just seen, but felt in every corner.</p>
      </div>
      <div className="discover-c">
        <div className="advantage">
          <h1>Discover the Royal Heritage <br />Advantage</h1>
          <p>Step into Royal Heritage's legacy of excellence, integrity, and<br /> cultural ethos. As Mangalore's top builders, we promise quality,<br /> fairness, and expertise. Discover the difference where dreams<br /> meet craftsmanship.</p>
          <button id="knowmore" onClick={() => navigate('/about')}>Know More</button>
        </div>
        <div className="experience">
          <Counter end={9} label="Years of Experience" />
          <hr />
          <Counter end={22} label="Happy Families" />
          <hr />
          <Counter end={5} label="Lakh Sqft Built" />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Discover;
