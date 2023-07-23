import React from "react";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";
import "./portfolio.css";
import don_logo from "./Logo_Don.png";
import mc_logo from "./Logo_MC.jpg";
import pochitama_logo from "./Logo_Pochitama.jpg";
import sj_logo from "./Logo_SJ.png";
import { useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../../firebase-config";
import Modal from "../Modal/modal";
import Card_modal from "./Card_Modal/Card_modal";

const Portfolio = () => {
  const [portfolioinfo, setPortfolioinfo] = useState([]);
  /*setDoc(doc(db, "home", "Portfolio"), {
    title: "NUESTROS TRABAJOS",
    t1: "    Ya son varias las personas que decidieron confiar en nuestros servicios y sumarse a la transformación digital",

  });*/

  const [title, setTitle] = useState("");
  const [t1, setT1] = useState("");

  const updateTitle = async () => {
    const portfolio_info = doc(db, "home", "Portfolio");
    await updateDoc(portfolio_info, {
      title: title,
    });
  };

  const updateT1 = async () => {
    const portfolio_info = doc(db, "home", "Portfolio");
    await updateDoc(portfolio_info, {
      t1: t1,
    });
  };

  ////////////////////////////////////
  useEffect(() => {
    const getPortfolio = async () => {
      const PortfolioDoc = doc(db, "home", "Portfolio");
      const docSnapshot = await getDoc(PortfolioDoc);
      if (docSnapshot.exists()) {
        setPortfolioinfo(docSnapshot.data());
      }
    };
    getPortfolio();
  }, []);
  ///////////////////CREATE CARD

  const createCard = async () => {
    /* let imageUrl = "";
  if (image) {
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    imageUrl = await getDownloadURL(storageRef);
  }

  await addDoc(doc(db, "home", "Portfolio"), {
    title,
  
 imageUrl,
    
  });
*/
  };
  const [cardImage, setCardImage] = useState("");
  const [cardTitle, setCardTitle] = useState("");

  return (
    <div className="portfolio_container">
      <div>
        <div className="portfolio_text">
          <div className="edit">
            <h1 className="title_portfolio">{portfolioinfo.title}</h1>
            <Modal>
              <input
                style={{ width: "400px", height: "30px" }}
                type="text"
                placeholder="Ingrese titulo"
                onChange={(e) => setCardTitle(e.target.value)}
              />
              <button onClick={() => updateTitle()}>GUARDAR</button>
            </Modal>
          </div>

          <div className="edit">
            <p className="text_description">{portfolioinfo.t1}</p>
            <Modal>
              <input
                style={{ width: "400px", height: "30px" }}
                type="text"
                placeholder="Ingrese texto 1"
                onChange={(e) => setT1(e.target.value)}
              />
              <button onClick={() => updateT1()}>GUARDAR</button>
            </Modal>
          </div>
        </div>

        <div className="slider">
          <div className="card_modal_btn">
            <Card_modal>
              <input
                style={{ width: "400px", height: "30px" }}
                type="text"
                placeholder="Ingrese titulo"
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="file"
                onChange={(event) => setCardImage(event.target.files[0])}
              />
              <button onClick={() => createCard()}>GUARDAR</button>
            </Card_modal>
          </div>
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
