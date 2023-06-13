import React from "react";
import arrow_R from "./icon_arrow_right.svg";
import "./card_news.css";

const Card_news = ({ image, title, btn }) => {
  return (
    <div className="card_news">
      <div className="card_cont">
        <div className="card_f">
          <div className="arrow">
            <img src={arrow_R} alt=" " className="arrow_R" />
            <img src={arrow_R} alt=" " className="arrow_R" />
          </div>
        </div>
        <div className="image">{image}</div>
      </div>
      <div className="title">{title}</div>

      <div className="card_btn">{btn}</div>
    </div>
  );
};

export default Card_news;
