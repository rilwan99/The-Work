import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              GAMING LIFE
              <i class="fas fa-gamepad" />
            </Link>
          </div>
          <small class="website-rights">Muhammad Rilwan © UTC2113</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
