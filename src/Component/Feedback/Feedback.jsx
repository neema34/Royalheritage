import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Feedback.css";
import img from "/Users/NEEMA/Downloads/Royalheritage (2)/Royalheritage/src/assets/bac.jpg";

const Feedback = () => {
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
    <div className="quote-container" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="quote-header">
        <h1>Get Quote</h1>
        <h2>Your dream home<br/>awaits - get<br/>your quote now!</h2>
        <p>Take the first step towards your inspiring residential space today! Click below to get a personalized quote for your dream build.</p>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name*</label>
        <input type="text" id="full-name" placeholder="Enter full name" required value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="mobile-number">Mobile Number*</label>
        <input type="tel" id="mobile-number" placeholder="Enter mobile number" required value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" placeholder="Enter e-mail address" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />

        <button className="rounded-button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
