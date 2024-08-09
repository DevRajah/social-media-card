import React from "react";
import "./card1.css";

const Card1 = ({ socials, num, cat, scale, arrow, handle, color, topColor, insta }) => {
    console.log(insta);

  return (
    <div className="card" id={insta} >
      <div className="card__title">
        <div>{socials}</div>
        <div className="handles">{handle}</div>
      </div>
      <div className="card__sect">
        <p className="num_sub">{num}</p>
        <p className="card_categories">{cat}</p>
      </div>
      <div className="card__title">
        <div>{arrow}</div>
        <div className="handles" style={color}>{scale}</div>
      </div>
    </div>
  );
};

export default Card1;
