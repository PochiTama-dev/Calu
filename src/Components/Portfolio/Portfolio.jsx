import React from "react";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";
import icono4 from "./icono_imagen.svg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio_container">
      <h1 className="title-first-portafolio">NUESTROS TRABAJOS</h1>

      <p className="text_second">
        Ya son varias las personas que decidieron confiar en nuestros servicios
        y sumarse a la transformación digital.
      </p>

      <Slider>
        <Card
          image={
            <img className="icono-portafolio" src={icono4} alt="icono pay" />
          }
          title={<p>DON OFICIOS</p>}
          btn={
            <a
              className="
        button-portafolio"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card>

        <Card
          image={
            <img className="icono-portafolio" src={icono4} alt="icono ojo" />
          }
          title={<p>STILL JOBS</p>}
          btn={
            <a
              className="
        button-portafolio"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card>

        <Card
          image={
            <img className="icono-portafolio" src={icono4} alt="icono llave" />
          }
          title={<p>COMUNIDAD DE MARCAS</p>}
          btn={
            <a
              className="
        button-portafolio"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card>
      </Slider>
    </div>
  );
};

export default Portfolio;
