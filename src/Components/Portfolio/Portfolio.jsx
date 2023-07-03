import React from "react";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";
import "./portfolio.css";
import don_logo from "./Logo_Don.png";
import mc_logo from "./Logo_MC.jpg";
import pochitama_logo from "./Logo_Pochitama.jpg";
import sj_logo from "./Logo_SJ.png";

const Portfolio = () => {
  return (
    <div className="portfolio_container">
      <div>
        <h1 className="title_portfolio"> NUESTROS TRABAJOS</h1>
        <p className="text_description">
          Ya son varias las personas que decidieron confiar en nuestros
          servicios y sumarse a la transformación digital
        </p>
        <div className="slider">
          <Slider>
            <Card
              image={
                <img
                  className="icon-portfolio"
                  src={don_logo}
                  alt="icono pay"
                  width="50%"
                />
              }
              title={<p>DON OFICIOS</p>}
              btn={
                <a
                  target="_blank"
                  className="
                button_portfolio"
                  href="https://www.instagram.com/don.oficios/  "
                >
                  Ver más
                </a>
              }
            ></Card>

            <Card
              image={
                <img
                  className="icon-portfolio"
                  src={sj_logo}
                  alt="icono ojo"
                  width="50%"
                />
              }
              title={<p>STILL JOBS</p>}
              btn={
                <a
                  target="_blank"
                  className="
                button_portfolio"
                  href=" https://www.instagram.com/stilljobsok/ "
                >
                  Ver más
                </a>
              }
            ></Card>

            <Card
              image={
                <img
                  className="icon-portfolio"
                  src={pochitama_logo}
                  alt="icono llave"
                  width="50%"
                />
              }
              title={<p>POCHITAMA.DEV</p>}
              btn={
                <a
                  target="_blank"
                  className="
                button_portfolio"
                  href=" https://www.instagram.com/pochitama.dev/"
                >
                  Ver más
                </a>
              }
            ></Card>
            <Card
              image={
                <img
                  className="icon-portfolio"
                  src={mc_logo}
                  alt="icono llave"
                  width="50%"
                />
              }
              title={<p>MC - ASISTENTE CONTABLE</p>}
              btn={
                <a
                  target="_blank"
                  className="
        button_portfolio"
                  href="https://www.instagram.com/marielacattarelli/  "
                >
                  Ver más
                </a>
              }
            ></Card>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
