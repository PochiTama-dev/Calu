import "./services.css";
import React from "react";
import { Header } from "../Header/header";
import Card_srv from "./Card_srv/Card_srv";
import servicios from "./constants";
import Slider from "../Services/Card_srv/Slider/Slider";
import Card_srv_flip from "./Card_srv/Card_srv_flip";

const Services = () => {
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
      <>
        <Header />;
        <div className="services_container">
          <div className="srv_title">
            <h1>Nuestros Servicios</h1>
          </div>
          <div className="srv_cards">
            {servicios.map((servicios) => (
              <div>
                <Card_srv
                  image={servicios.img}
                  title={servicios.title}
                  sub={servicios.sub}
                  des_1={servicios.des_1}
                  des_2={servicios.des_2}
                  des_3={servicios.des_3}
                ></Card_srv>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Header />
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
  );
};

export default Services;
