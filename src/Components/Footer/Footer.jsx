import React from "react";
import "./footer.css";
import calu_logo from "./icons/calu_logo.svg";
import fb_logo from "./icons/Facebook.png";
import insta_logo from "./icons/Instagram.png";
import ld_logo from "./icons/Linkedin.png";
import tk_logo from "./icons/TikTok.png";
import sp_logo from "./icons/Spotify.png";

const Footer = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 767;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <div className="footer_container">
        <div className="footer_elements">
          <div className="logo_calu">
            <img src={calu_logo} alt="calu" />
            <p>TU AGENCIA DE MARKETING DIGITAL</p>
          </div>

          <div className="servicios">
            <h1>SERVICIOS</h1>

            <div className="servicios_">
              <ul>
                <li>
                  <span>Consultoría Estratégica</span>
                </li>
                <li>
                  <span>Gestión de Redes Sociales</span>
                </li>
                <li>
                  <span>Publicidad Digital</span>
                </li>
                <li>
                  <span>E-mail Marketings</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Book Institucional</span>
                </li>
                <li>
                  <span>Creación de Contenido</span>
                </li>
                <li>
                  <span>Modelo de Negocio</span>
                </li>
                <li>
                  <span>Desarrollo Web</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="redes">
            <h1>REDES</h1>
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
      </div>
    );
  }
  return (
    <div className="footer_container">
      <div className="footer_elements_mobile">
        <div className="logo_calu">
          <img src={calu_logo} alt="calu" />
          <p>TU AGENCIA DE MARKETING DIGITAL</p>
        </div>

        <div className="servicios">
          <h1>SERVICIOS</h1>

          <div className="servicios_">
            <ul>
              <li>
                <span>Consultoría Estratégica</span>
              </li>
              <li>
                <span>Gestión de Redes Sociales</span>
              </li>
              <li>
                <span>Publicidad Digital</span>
              </li>
              <li>
                <span>E-mail Marketings</span>
              </li>
              <li>
                <span>Book Institucional</span>
              </li>
              <li>
                <span>Creación de Contenido</span>
              </li>
              <li>
                <span>Modelo de Negocio</span>
              </li>
              <li>
                <span>Desarrollo Web</span>
              </li>
            </ul>
          </div>
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
    </div>
  );
};
export default Footer;
