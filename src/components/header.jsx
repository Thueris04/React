import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>Blank</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button className="btn">Order now</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
