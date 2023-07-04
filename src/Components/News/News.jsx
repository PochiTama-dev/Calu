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
        <div>
          <h1 className="title_novedades">NOVEDADES</h1>
          <p>No te pierdas los úlimos contenidos de nuestro blog.</p>
          <div className="cards_novedades">
            <a href="">
              <Card_news
                image={
                  <img
                    className="icons_novedades"
                    src={""}
                    alt=""
                    width="50%"
                  />
                }
                title={"TENDENCIAS 2023"}
              ></Card_news>
            </a>
            <a href="">
              <Card_news
                image={
                  <img
                    className="icons_novedades"
                    src={""}
                    alt=""
                    width="50%"
                  />
                }
                title={"TENDENCIAS 2023"}
              ></Card_news>
            </a>
            <a href="">
              <Card_news
                image={
                  <img
                    className="icons_novedades"
                    src={""}
                    alt=""
                    width="50%"
                  />
                }
                title={"TENDENCIAS 2023"}
              ></Card_news>{" "}
            </a>
          </div>
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
          <a href="">
            <Card_news
              image={
                <img className="icons_novedades" src={""} alt="" width="50%" />
              }
              title={"TENDENCIAS 2023"}
            ></Card_news>{" "}
          </a>
          <a href="">
            <Card_news
              image={
                <img className="icons_novedades" src={""} alt="" width="50%" />
              }
              title={"TENDENCIAS 2023"}
            ></Card_news>
          </a>
          <a href="">
            <Card_news
              image={
                <img className="icons_novedades" src={""} alt="" width="50%" />
              }
              title={"TENDENCIAS 2023"}
            ></Card_news>
          </a>
        </Slider>
      </div>
      <div className="btn_cont">
        <button className="news_btn">
          <div>VER MAS </div>
        </button>
      </div>
    </div>
  );
};

export default News;
