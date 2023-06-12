import React from "react";
import "./novedades.css";
import Card_news from "./Card_news/Card_news";
const Novedades = () => {
  return (
    <div className="novedades_container">
      <h1 className="title_novedades">NOVEDADES</h1>
      <p>No te pierdas los úlimos contenidos de nuestro blog.</p>
      <div className="cards_novedades">
        <Card_news
          image={
            <img className="icons_novedades" src={""} alt="" width="50%" />
          }
          title={"TENDENCIAS 2023"}
          btn={
            <a
              target="_blank"
              className="
                  button_novedades"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card_news>
        <Card_news
          image={
            <img className="icons_novedades" src={""} alt="" width="50%" />
          }
          title={"TENDENCIAS 2023"}
          btn={
            <a
              target="_blank"
              className="
                  button_novedades"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card_news>
        <Card_news
          image={
            <img className="icons_novedades" src={""} alt="" width="50%" />
          }
          title={"TENDENCIAS 2023"}
          btn={
            <a
              target="_blank"
              className="
                  button_novedades"
              href=" "
            >
              Ver más
            </a>
          }
        ></Card_news>
      </div>
    </div>
  );
};

export default Novedades;
