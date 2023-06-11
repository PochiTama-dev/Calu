import React from "react";
import "./footer.css";

import calu_logo from "./calu_logo.svg";
import fb_logo from "./Facebook.png";
import insta_logo from "./Instagram.png";
import ld_logo from "./Linkedin.png";
import tk_logo from "./TikTok.png";
import sp_logo from "./Spotify.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="logo_calu">
        <img src={calu_logo} alt="calu" />
        <p>TU AGENCIA DE MARKETING DIGITAL</p>
      </div>

      <div className="servicios">
        <h2>SERVICIOS</h2>
        <ul>
          <li>Consultoría Estratégica</li>
          <li>Gestión de Redes Sociales</li>
          <li>Publicidad Digital</li>
          <li>E-mail Marketings</li>
          <li>Book Institucional</li>
          <li>Creación de Contenido</li>
          <li>Modelo de Negocio</li>
          <li>Desarrollo Web</li>
        </ul>
      </div>

      <div className="redes">
        <h2>REDES</h2>
        <div className="social_icons">
          <a href="">
            <img src={ld_logo} alt="linkedin" />
          </a>
          <a href="">
            <img src={fb_logo} alt="facebook" />
          </a>
          <a href="">
            <img src={insta_logo} alt="instagram" />
          </a>
          <a href="">
            <img src={tk_logo} alt="tiktok" />
          </a>
          <a href="">
            <img src={sp_logo} alt="spotify" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
