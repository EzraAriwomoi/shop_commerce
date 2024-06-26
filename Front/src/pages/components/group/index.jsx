// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";

export const Group = () => {
  return (
    <div className="group">
      <img className="rectangle" alt="Rectangle" src="rectangle-9.png" />
      <div className="overlap">
        <div className="div" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">Product Name</div>
            <p className="kes">
              <span className="span">Kes:</span>
              <span className="text-wrapper-2"> 2000</span>
            </p>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame">
          <div className="text-wrapper-3">Add to cart</div>
        </div>
      </div>
    </div>
  );
};


