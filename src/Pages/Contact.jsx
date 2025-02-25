import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contactstyle.css";
import Navbar from "../Component/navbar/Navbar";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Admin email data
    const adminMailData = {
      from_name: name,
      phone: phone,
      email: email,
      message: message,
      to_email: import.meta.env.VITE_ADMIN_EMAIL, // Admin's email
    };

    // Client confirmation email data
    const clientMailData = {
      from_name: "Your Website Team",
      to_name: name,
      phone: phone,
      email: email,
      message: message,
      to_email: email, // Client's email
    };

    try {
      // Send email to Admin
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        adminMailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Admin email sent");

      // Send confirmation email to Client
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID,
        clientMailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent! A confirmation email has been sent to your inbox.");
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div> 
      <Navbar/>
    <div className="photo1">
      <h1>Contact Us</h1>
      <img src="/Royalheritage/assets/photo1.jpeg"className="pic2" alt="Contact Header" />

      <div className="contact-container">
        <div className="contact-info">
          <img src="/Royalheritage/assets/cont.jpeg" alt="Conference Room" className="contact-image" />
          <div className="contact-details">
            <p><i className="fa-solid fa-location-dot">&nbsp;&nbsp;</i>FORTUNE PROMOTERS</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fortune Highway-II</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Road, Moodbidri-574227</p>
            <p><i className="fa-solid fa-phone">&nbsp;</i>+91 94482 16661</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 70225 4449</p>
            <p><i className="fa-solid fa-envelope"></i>&nbsp; royalheritagecity@gmail.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Reach out for any query</h2>
          <p>Contact us today to discuss your property needs and choose the right plan.<br/> We’re here to guide you through every step of the process.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name <span>*</span></label>
            <input type="text" placeholder="Enter full name" required value={name} onChange={(e) => setName(e.target.value)} />

            <label>Mobile Number <span>*</span></label>
            <input type="text" placeholder="Enter mobile number" required value={phone} onChange={(e) => setPhone(e.target.value)} />

            <label>Email <span>*</span></label>
            <input type="email" placeholder="Enter e-mail address" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Message</label>
            <textarea placeholder="Enter Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
