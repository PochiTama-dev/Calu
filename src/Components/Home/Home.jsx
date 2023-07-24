import { useState, useRef } from "react";
import "animate.css/animate.min.css";
import "./home.css";
import { Header } from "../Header/header";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import News from "../News/News";
import Onboarding from "../Onboarding/Onboarding";
import OurServices from "../OurServices/OurServices";
import CTN from "../CTN/CTN";
import Contact_button from "./Contact_button/Contact_button";
import React from "react";
import arrow_L from "./icon_arrow_left.svg";
const Home = () => {
  const numSections = 5;
  const [currentSection, setCurrentSection] = useState(0);

  const sectionStyles = {
    height: "100vh",
    transition: "transform 0.5s ease-in-out",
  };

  const getSectionClassName = (sectionNumber) =>
    `section-${sectionNumber} ${
      currentSection === sectionNumber
        ? "animate__animated animate__fadeIn"
        : ""
    }`;

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 767;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  //////////// Scroll to top
  const firstSection = useRef(null);
  const scrollToTop = () => {
    firstSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  //////////////
  if (width > breakpoint) {
    return (
      <div className="container">
        <Header />
        <button onClick={scrollToTop}>
          <img className="arrow_up" src={arrow_L} />
        </button>
        <Contact_button />

        <section
          style={sectionStyles}
          className={getSectionClassName(0)}
          ref={firstSection}
        >
          <Onboarding />
        </section>
        <section style={sectionStyles} className={getSectionClassName(1)}>
          <About />
        </section>
        <section style={sectionStyles} className={getSectionClassName(2)}>
          <OurServices />
        </section>
        <section style={sectionStyles} className={getSectionClassName(3)}>
          <Portfolio />
        </section>
        <section style={sectionStyles} className={getSectionClassName(4)}>
          <News />
        </section>
        <section>
          <CTN />
          <Footer />
        </section>
      </div>
    );
  }
  return (
    <div className="container">
      <Header />
      <Contact_button />
      <section style={sectionStyles} className={getSectionClassName(0)}>
        <Onboarding />
      </section>
      <section style={sectionStyles} className={getSectionClassName(1)}>
        <About />
      </section>
      <section style={sectionStyles} className={getSectionClassName(2)}>
        <OurServices />
      </section>
      <section style={sectionStyles} className={getSectionClassName(3)}>
        <Portfolio />
      </section>
      <section style={sectionStyles} className={getSectionClassName(4)}>
        <News />
      </section>
      <section>
        <CTN />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
