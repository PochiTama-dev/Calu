import React from "react";
import "./card_srv.css";
import { useState } from "react";

const Card_srv = ({ image, title, sub, des_1, des_2, des_3 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="card_srv_cont">
        <div className="card_srv_info">
          <div className="image">{image}</div>
          <div className="title">{title}</div>
          <div className="sub">{sub}</div>
          {isOpen && (
            <div className="overlay" onClick={() => setIsOpen(false)}></div>
          )}
        </div>
        <div className="card_btn_ctn">
          <button className="card_btn" onClick={handleClick}>
            Ver Más
          </button>
        </div>
      </div>
      <div className={`modal ${isOpen ? "visible" : ""}`}>
        <div className="des">
          <div className="image">{image}</div>
          <div className="title">{title}</div>
          <div className="des_1">{des_1}</div>
          <br />
          <div>{des_2}</div>
          <br />
          <div className="des_3">{des_3}</div>
        </div>
      </div>
    </div>
  );
};

export default Card_srv;
