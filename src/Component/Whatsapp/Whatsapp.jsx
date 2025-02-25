import React from "react";
import "../css/whatsapp.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const WhatsApp = () => {
  return (
    <section>
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-button">
        <a
          href="99900302313"
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