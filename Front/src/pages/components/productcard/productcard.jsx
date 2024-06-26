// ProductCard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/productlistingcss/productlisting.css';
import { Button } from '../../../components/shoppingcartcomponent';

const ProductCard = ({ productName, price, imageUrl }) => (
  <div className="group-5">
    <img className="rectangle" alt={productName} src={imageUrl} />
    <div className="overlap">
      <div className="group-4" />
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper-2">{productName}</div>
          <p className="kes">
            <span className="span">Kes:</span>
            <span className="text-wrapper-3"> {price}</span>
          </p>
        </div>
      </div>
    </div>
    <Button className="frame-wrapper">
      <div className="frame-3">
        <div className="text-wrapper-4">Add to cart</div>
      </div>
    </Button>
  </div>
);

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
