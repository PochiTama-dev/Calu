import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "animate.css/animate.min.css";
import "./home.css";
import { Header } from "../Header/header";
import icono from "../Home/icon_eye.svg";
import icono2 from "../Home/🦆 icon _key_.svg";
import icono3 from "../Home/🦆 icon _pie chart_.svg";
import About from "../About/About";

const Home = () => {
  const numSections = 4;
  const [currentSection, setCurrentSection] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () =>
      setCurrentSection((prev) => Math.min(prev + 1, numSections - 1)),
    onSwipedDown: () => setCurrentSection((prev) => Math.max(prev - 1, 0)),
  });

  const handleScroll = (e) => {
    const delta = e.deltaY;
    if (delta > 0) {
      setCurrentSection((prev) => Math.min(prev + 1, numSections - 1));
    } else if (delta < 0) {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div
      {...handlers}
      onWheel={handleScroll}
      style={{
        transform: `translateY(-${currentSection * 100}vh)`,
        height: "100vh",
        width: "100%",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <Header />
      <section
        style={{
          height: "110vh",
          transition: "transform 0.5s ease-in-out",
        }}
        className={`section-1 ${
          currentSection === 0 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <About></About>
      </section>
      <section
        style={{ height: "110vh", transition: "transform 0.5s ease-in-out" }}
        className={`section-2 ${
          currentSection === 1 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <h1 className="title-first-nuestros-servicios">NUESTROS SERVICIOS</h1>

        <p className="text-second">
          Contamos con una amplia gama de servicios diseñados a la medida de
          cada emprendimiento que quie ra tener éxito en el mundo digital.
        </p>
        <div className="ctn-servicios">
          <img className="icono-servicios" src={icono3} alt="icono pay" />
          <p className="text-icono-servicios">CONSULTORIA ESTRATEGICA</p>
          <img className="icono-servicios" src={icono} alt="icono ojo" />
          <p className="text-icono2-servicios">GESTIÓN DE REDES SOCIALES</p>
          <img className="icono-servicios" src={icono2} alt="icono llave" />
          <p className="text-icono3-servicios">PUBLICIDAD DIGITAL</p>
        </div>
      </section>

      <section
        style={{ height: "110vh", transition: "transform 0.5s ease-in-out" }}
        className={`section-3 ${
          currentSection === 2 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <div className="ctn-portafolio"></div>
      </section>
      <section
        style={{ height: "110vh", transition: "transform 0.5s ease-in-out" }}
        className={`section-4 ${
          currentSection === 3 ? "animate__animated animate__fadeIn" : ""
        }`}
      >
        <h1 className="title-first">NOVEDADES</h1>
      </section>
    </div>
  );
};

export default Home;
