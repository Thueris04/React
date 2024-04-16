import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="social-media-list">
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </li>
      </ul>
      <p className="copyright">
        Designed by © 2024 Sebastian Munoz. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
