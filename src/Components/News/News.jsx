import React from "react";
import "./news.css";
import Card_news from "./Card_news/Card_news";
import Slider from "./Slider/Slider";
import { useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase-config";

const News = () => {
  const [newsinfo, setNewsinfo] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const NewsDoc = doc(db, "home", "News");
      const docSnapshot = await getDoc(NewsDoc);
      if (docSnapshot.exists()) {
        setNewsinfo(docSnapshot.data());
      }
    };
    getNews();
  }, []);

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
        <div className="news_text">
          <div className="edit">
            <h1 className="title_novedades">{newsinfo.title}</h1>
          </div>

          <div className="edit">
            <p>{newsinfo.t1}</p>
          </div>
        </div>

        <div className="cards_novedades">
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
          <a href="">
            <Card_news
              image={
                <img className="icons_novedades" src={""} alt="" width="50%" />
              }
              title={"TENDENCIAS 2023"}
            ></Card_news>{" "}
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="novedades_container">
      <div className="news_text">
        <div className="edit">
          <h1 className="title_novedades">{newsinfo.title}</h1>
        </div>
        <div className="edit">
          <p>{newsinfo.t1}</p>
        </div>
        <div className="cards_novedades"></div>
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
