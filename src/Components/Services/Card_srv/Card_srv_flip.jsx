import React from "react";
import "./card_srv_flip.css";
import { useState } from "react";

const Card_srv_flip = ({ image, title, sub, des_1, des_2, des_3 }) => {
  const handleClick = () => {};

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div className="flip-card-front_items">
            <div className="image">{image}</div>
            <div className="title">{title}</div>
            <div className="sub">{sub}</div>
          </div>
          <div className="card_btn_ctn">
            <button className="card_btn" onClick={handleClick}>
              Ver Más
            </button>
          </div>
        </div>
        <div class="flip-card-back">
          <div>{des_1}</div>
          <br />
          <div>{des_2}</div>
          <br />
          <div className="des_3">{des_3}</div>
        </div>
      </div>
    </div>
  );
};

export default Card_srv_flip;
