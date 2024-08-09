import React from "react";
import "./card2.css";

const Card2 = ({ handle, arrow, color, scale, socials, num }) => {
  return (
    <div className="card2">
      <div className="card2__content-container">
        <div className="handles">{handle}</div>
        <div>{socials}</div>
      </div>
      <div className="card2__content-container">
        <p className="num_sub">{num}</p>
          <div className="card__title">
            <div>{arrow}</div>
            <div className="handles" style={color}>
              {scale}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Card2;
