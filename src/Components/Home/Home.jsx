import { useState, useRef } from 'react';
import 'animate.css/animate.min.css';
import './home.css';
import { Header } from '../Header/header';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import News from '../News/News';
import Onboarding from '../Onboarding/Onboarding';
import OurServices from '../OurServices/OurServices';
import CTN from '../CTN/CTN';
import Contact_button from './Contact_button/Contact_button';
import React from 'react';
import arrow_L from './icon_arrow_left.svg';
import Resources from '../Resources/Resources';
import { useCustomContext } from '../../Hooks/Context/Context';
const Home = () => {
  const { cart, removeFromCart } = useCustomContext();


  const sectionStyles = {
    transition: 'transform 0.5s ease-in-out',
  };



  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1024;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  //////////// Scroll to top
  const firstSection = useRef(null);
  const scrollToTop = () => {
    firstSection.current?.scrollIntoView({ behavior: 'smooth' });
  };
  //////////////
  if (width > breakpoint) {
    return (
      <div className='container'>
        <Header cartItem={cart} handleDelete={removeFromCart} />

        <button className="arrow_up12" onClick={scrollToTop}>
          <img className="arrow_up" src={arrow_L} alt="Arrow Up" />

        </button>
        <Contact_button />

        <section style={sectionStyles} ref={firstSection}>
          <Onboarding />
        </section>
        <section style={sectionStyles} >
          <About />
        </section>
        <section style={sectionStyles} >
          <OurServices />
        </section>
        <section style={sectionStyles} >
          <Portfolio />
        </section>
        <section style={sectionStyles} >
          <News />
        </section>
        <section style={sectionStyles} >
          <Resources />
        </section>
        <section style={sectionStyles} >
          <CTN />
          <Footer />
        </section>
      </div>
    );
  }
  return (
    <div className='container'>
      <Header cartItem={cart} />

      <button className="arrow_up12" onClick={scrollToTop}>
        <img className="arrow_up" src={arrow_L} alt="Arrow Up" />

      </button>
      <Contact_button />
      <section ref={firstSection} style={sectionStyles} >
        <Onboarding />
      </section>
      <section style={sectionStyles} >
        <About />
      </section>
      <section style={sectionStyles} >
        <OurServices />
      </section>
      <section style={sectionStyles} >
        <Portfolio />
      </section>
      <section style={sectionStyles} >
        <News />
      </section>
      <section style={sectionStyles}>
        <Resources />
      </section>
      <section style={sectionStyles} >
        <CTN />
      </section>
      <section style={sectionStyles} ></section>
      <Footer />
    </div>
  );
};

export default Home;
