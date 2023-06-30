import { useState } from "react";
import { useSwipeable } from "react-swipeable";
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

  return (
    <div className="container">
      <Header />
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
        <Footer />
      </section>
    </div>
  );
};

export default Home;
