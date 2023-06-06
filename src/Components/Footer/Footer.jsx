import React from "react";
import "./footer.css";
import face_icon from "./social_icon.svg";
import calu_logo from "./calu_logo.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="logo">
        <img className="logo_img" src={calu_logo} alt="calu" />
        <p>TU AGENCIA DE MARKETING DIGITAL</p>
      </div>
      <div className="servicios">
        <h2>SERVICIOS</h2>
        <ul>
          <li>Consultoría Estatégica</li>
          <li>Publicidad Digital</li>
          <li>Desarrolo Web</li>
          <li>Manejo de Redes</li>
          <li>Email Marketing</li>
        </ul>
      </div>
      <div className="redes">
        <h1>REDES</h1>
        <div className="social_icons">
          <img src={face_icon} alt="" />
          <img src={face_icon} alt="" />
          <img src={face_icon} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
