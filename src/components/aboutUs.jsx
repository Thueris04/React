import React from "react";
import "./aboutUs.css";
function AboutUs() {
  return (
    <div className="about-us-section">
      <h2>About Blank Bakery</h2>
      <div className="about-us-p">
        <p>
          This belief is the foundation of Blank Bakery, your premier
          destination for booking versatile and commodious spaces designed to
          bring your most ambitious visions to life.
        </p>
        <p>
          Whether you're looking to host a corporate event, an intimate
          workshop, a creative session, or simply need a spacious and
          well-equipped place to gather and create, we've got you covered.
        </p>
      </div>
      <div className="cta-button">
        <button className="btn3">Book a Space</button>
      </div>
    </div>
  );
}

export default AboutUs;
