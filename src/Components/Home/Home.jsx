import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'animate.css/animate.min.css';
import './home.css'
import { Header} from '../Header/header';
import icono from "../Home/icon_eye.svg"
import icono2 from "../Home/🦆 icon _key_.svg"
import icono3 from "../Home/🦆 icon _pie chart_.svg"

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
      height: '100vh',
      width: '100%',
      transition: 'transform 0.5s ease-in-out'
    }}>
      <Header/>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className={`section-1 ${currentSection === 0 ? 'animate__animated animate__fadeIn' : ''}`}>
         <h1 className='title-first-quienes-somos'>¿QUIENES SOMOS?</h1>
         <h2 className='sub-first'>SOMOS UN EQUIPO</h2>
         <h2 className='sub-second'>APASIONADO POR LA TRANSFORMACION DIGITAL</h2>
         <p className='text-first'>Compartimos la pasión por nuestro trabajo y la ilusión por cambiar el mundo emprendedor.</p>
         <p className='text-first'>Potenciamos la identidad digital de tu marca acompañándote en el proceso, escuchándote y aconsejándote para que tu experiencia y la de tu público sea única.</p>
      </section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className={`section-2 ${currentSection === 1 ? 'animate__animated animate__fadeIn' : ''}`}>
        <h1 className='title-first-nuestros-servicios'>NUESTROS SERVICIOS</h1>
        <p className='text-second'>Contamos con una amplia gama de servicios diseñados a la medida de cada emprendimiento que quie ra tener éxito en el mundo digital.</p>
        <div className='ctn-servicios'>
          <img className='icono' src={icono3} alt="icono pay" />
          <p className='text-icono'>CONSULTORIA ESTRATEGICA</p>
          <img className='icono' src={icono} alt="icono ojo" />
          <p className='text-icono2'>GESTIÓN DE REDES SOCIALES</p>
          <img className='icono' src={icono2} alt="icono llave" />
          <p className='text-icono3'>PUBLICIDAD DIGITAL</p>
        </div>
      </section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className={`section-3 ${currentSection === 2 ? 'animate__animated animate__fadeIn' : ''}`}><h1 className='title-first'>PORTAFOLIO</h1></section>
      <section style={{ height: '110vh', transition: 'transform 0.5s ease-in-out' }} className={`section-4 ${currentSection === 3 ? 'animate__animated animate__fadeIn' : ''}`}><h1 className='title-first'>NOVEDADES</h1></section>
    </div>
  );
};

export default Home;
