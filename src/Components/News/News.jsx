import React from "react";
import "./news.css";
import Card_news from "./Card_news/Card_news";
import Slider from "./Slider/Slider";
const News = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
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
  }
  return (
    <div className="novedades_container">
      <h1 className="title_novedades">NOVEDADES</h1>
      <p>No te pierdas los úlimos contenidos de nuestro blog.</p>
      <div className="cards_novedades">
        <Slider>
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
        </Slider>
      </div>
    </div>
  );
};

export default News;
