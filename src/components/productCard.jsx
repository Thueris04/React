import React from "react";
import "./productCard.css"; //
function ProductCard({ title, subtitle, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>${price}</p>
      <button className="btn">Order now</button>
    </div>
  );
}

export default ProductCard;
