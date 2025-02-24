import {React,useState ,useRef} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const buttonref=useRef()

  const bchange=()=>{
   let element = document.getElementById("burger");
 
   if (element.classList.contains("fa-bars")) {
     element.classList.add("fa-x");
     element.classList.remove("fa-bars");
   } else {
     element.classList.add("fa-bars");
     element.classList.remove("fa-x");
   }
 };
 
 
  const handleClick = () => {
    buttonref.current.classList.toggle('opened');
 };
 const btn=()=>{
   handleClick()
   bchange()
 }
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="src/assets/royal.logo.png" alt="" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div onClick={btn} className="open"><i  id='burger' className={"fa-solid fa-bars"}></i></div>
      <div ref={buttonref} className="drop-down ">
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

      </div>
    </nav>
  );
};

export default Navbar;