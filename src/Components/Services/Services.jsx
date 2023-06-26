import "./services.css";
import React from "react";
import { Header } from "../Header/header";
import servicios from "./constants";
import Slider from "../Services/Card_srv/Slider/Slider";
import Card_srv_flip from "./Card_srv/Card_srv_flip";
import Footer from "../Footer/Footer";
import CTN from "../CTN/CTN";

const Services = () => {
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
      <>
        <Header />;
        <div className="services_container">
          <div className="srv_title">
            <h1>Nuestros Servicios</h1>
          </div>
          <div>
            {servicios.map((servicios, index) => (
              <div className="srv_cards">
                <div
                  className={
                    index % 2 == 0 ? "card_srv_cont" : "card_srv_cont_inv"
                  }
                >
                  <div
                    className={
                      index % 2 == 0 ? "card_srv_info" : "card_srv_info_inv"
                    }
                  >
                    <div className="title_srv">{servicios.title}</div>
                    <div className="sub_d">{servicios.sub}</div>
                    <div className="des_1d">
                      <div>{servicios.des_1}</div>
                      <br />
                      <div>{servicios.des_2}</div>
                    </div>
                    <div className="des_3d">{servicios.des_3}</div>
                  </div>
                  <div className="srv_icon">
                    <div>{servicios.img}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTN/>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="services_container">
        <div className="srv_cards">
          <div className="srv_title">
            <h1>Nuestros Servicios</h1>
          </div>
          <Slider>
            {servicios.map((servicios) => (
              <div>
                <Card_srv_flip
                  image={servicios.img}
                  title={servicios.title}
                  sub={servicios.sub}
                  des_1={servicios.des_1}
                  des_2={servicios.des_2}
                  des_3={servicios.des_3}
                ></Card_srv_flip>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <CTN/>
      <Footer />
    </>
  );
};

export default Services;
