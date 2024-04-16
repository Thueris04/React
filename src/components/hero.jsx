import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="text-content">
        <h1>Blank Bakery</h1>
        <p>
          Nestled in the heart of the city, Blank Bakery offers a unique escape
          into a world where simplicity and sophistication meet. Our bakery is
          inspired by the serene aesthetics of white Japanese layout and graphic
          design, creating an atmosphere that is both tranquil and inviting..
        </p>
        <button className="btn">Order now</button>
        <button className="btn2">View Menu</button>
      </div>
      <div className="hero-image">
        {/* If using a local image, uncomment the line below and comment out the placeholder */}
        {/* <img src={heroImage} alt="Hero" /> */}
        <img
          src="https://rchive.ca/cdn/shop/files/rchive_space-103_5a2defc8-4e94-48e5-8543-c6ed9b89a1fc_3000x2001_crop_center.jpg?v=1699721933"
          alt="Placeholder"
        />
      </div>
    </div>
  );
}

export default Hero;
