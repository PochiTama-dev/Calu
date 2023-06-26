import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'animate.css/animate.min.css';
import './home.css';
import { Header } from '../Header/header';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import News from '../News/News';
import Onboarding from '../Onboarding/Onboarding';
import OurServices from '../OurServices/OurServices';

const Home = () => {
  const numSections = 5;
  const [currentSection, setCurrentSection] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () => setCurrentSection((prev) => Math.min(prev + 1, numSections - 1)),
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

  const sectionStyles = {
    height: '100vh',
    transition: 'transform 0.5s ease-in-out',
  };

  const getSectionClassName = (sectionNumber) =>
    `section-${sectionNumber} ${
      currentSection === sectionNumber ? 'animate__animated animate__fadeIn' : ''
    }`;

  return (
    <div
      {...handlers}
      onWheel={handleScroll}
      style={{
        transform: `translateY(-${currentSection * 100}vh)`,
        height: '100vh',
        width: '100%',
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      
      <section style={sectionStyles} className={getSectionClassName(0)}>
      <Header />
        <Onboarding />
      </section>
      <section style={sectionStyles} className={getSectionClassName(1)}>
        <About />
      </section>
      <section style={sectionStyles} className={getSectionClassName(2)}>
        <OurServices />
      </section>
      <section style={sectionStyles} className={getSectionClassName(3)}>
        <div className='portfolio'>
          <Portfolio />
        </div>
      </section>
      <section style={sectionStyles} className={getSectionClassName(4)}>
        <News />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
