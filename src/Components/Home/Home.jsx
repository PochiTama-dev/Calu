import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'animate.css/animate.min.css';
import './home.css';
import { Header } from '../Header/header';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import News from '../News/News';
import Slider from '../Portfolio/Slider/Slider';
import Card from '../Portfolio/Card/Card';
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
      <Header />
      <section
        style={{ height: '100vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-1 ${currentSection === 0 ? 'animate__animated animate__fadeIn' : ''}`}
      >
        <About />
      </section>
      <section
        style={{ height: '100vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-2 ${currentSection === 1 ? 'animate__animated animate__fadeIn' : ''}`}
      >
        <OurServices />
      </section>
      <section
        style={{ height: '100vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-3 ${currentSection === 2 ? 'animate__animated animate__fadeIn' : ''}`}
      >
        <div className='portfolio'>
          <Portfolio />
        </div>
      </section>
      <section
        style={{ transition: 'transform 0.5s ease-in-out' }}
        className={`section-4 ${currentSection === 3 ? 'animate__animated animate__fadeIn' : ''}`}
      >
        <News />
      </section>
        <Footer />
    </div>
  );
};

export default Home;
