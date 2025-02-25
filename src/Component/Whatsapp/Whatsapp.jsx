import React from "react";
import "./whatsapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsApp = () => {
  return (
    <section>
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/7022544499" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whats" />
        </a>
      </div>
    </section>
  );
};

export default WhatsApp;
