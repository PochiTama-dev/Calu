import React from "react";
import Onboarding from "./layout/Onboarding/Onboarding";
import About from "./layout/About/About";
import OurServices from "./layout/OurServices/OurServices";
import Portfolio from "./layout/Portfolio/Portfolio";
import News from "./layout/News/News";
import CTN from "./layout/CTN/CTN";
import { Header } from "../Header/header";
import Footer from "../Footer/Footer";
import Contact_button from "../Home/Contact_button/Contact_button";
const AdminHome = () => {
  return (
    <div>
      <Contact_button />
      <Header />
      <section>
        <Onboarding />
      </section>

      <section>
        <About />
      </section>

      <section>
        <OurServices />
      </section>

      <section>
        <Portfolio />
      </section>
      <section>
        <News />
      </section>
      <section>
        <CTN />
        <Footer />
      </section>
    </div>
  );
};

export default AdminHome;
