import React from "react";
import arrow_R from "./icon_arrow_right.svg";
import "./card_res.css";
import elipse from "./elipse.svg";
import cart from "./cart.svg";

const Card_res = ({ title, description, btn, btn_delete }) => {
  return (
    <div className="card_ctn">
      <div className="card_res">
        <div className="arrow_res">
          <img src={arrow_R} alt=" " className="arrow_r" />
          <img src={arrow_R} alt=" " className="arrow_r" />
        </div>
        <div className="btn_delete">{btn_delete}</div>

        <div className="res_cart">
          <img src={elipse} alt=" " className="elipse" />
          <img src={cart} alt=" " className="cart" />
        </div>
        <div className="res_description">
          <img className="res_img" src={description} alt={title} />{" "}
          {/* Render the thumbnail as an image */}
        </div>
      </div>

      <div className="title_news">{title}</div>
    </div>
  );
};

export default Card_res;
