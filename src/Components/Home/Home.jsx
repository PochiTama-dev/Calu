import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './home.css'

const Home = () => {
  const numSections = 4;
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
    <div {...handlers} onWheel={handleScroll} style={{ 
      transform: `translateY(-${currentSection * 100}vh)`,
      height: '110vh',
      width: '100%',
      transition: 'transform 0.5s ease-in-out'
    }}>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className="section-1">Sección 1</section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className="section-2">Sección 2</section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className="section-3">Sección 3</section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className="section-4">Sección 4</section>
    </div>
  );
};

export default Home;
