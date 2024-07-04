// ProductCard.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../css/productlistingcss/productlisting.css";
import { Button } from "../../../components/shoppingcartcomponent";

const ProductCard = ({ productName, price, imageUrl }) => (
  <div className="plp-card">
    <a href={`/productdetails/${productName}`} className="plp-image">
      <img src={imageUrl} />
    </a>
    <div className="plp-details">
      <div className="plpd-details">
        <h4>{productName}</h4>
        <span>Kes: {price}</span>
      </div>
      <div className="plpd-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
