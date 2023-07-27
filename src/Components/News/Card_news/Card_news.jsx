import React from "react";
import arrow_R from "./icon_arrow_right.svg";
import "./card_news.css";

const Card_news = ({ image, title, description, btn }) => {
  return (
    <div className="card_news">
      <div className="card_cont">
        <div className="card_f_news">
          <div className="arrow">
            <img src={arrow_R} alt=" " className="arrow_R" />
            <img src={arrow_R} alt=" " className="arrow_R" />
          </div>
          <div className="image">{image}</div>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="title_news">{title}</div>
    </div>
  );
};

export default Card_news;
