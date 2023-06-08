import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'animate.css/animate.min.css';
import './home.css';
import { Header } from '../Header/header';
import icono from '../Home/icon_eye.svg';
import icono2 from '../Home/🦆 icon _key_.svg';
import icono3 from '../Home/🦆 icon _pie chart_.svg';
import icono4 from '../Home/icono_imagen.svg';
import contacto from '../../images/Contactanos.png';

const Home = () => {
  const numSections = 4;
  const [currentSection, setCurrentSection] = useState(0);
  const [showText, setShowText] = useState(null);

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
        height: '100vh',
        width: '100%',
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <Header />
      <section
        style={{ height: '90vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-1 ${
          currentSection === 0 ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        <h1 className='title-first-quienes-somos'>¿QUIENES SOMOS?</h1>
        <h2 className='sub-first'>SOMOS UN EQUIPO</h2>
        <h2 className='sub-second'>APASIONADO POR LA TRANSFORMACION DIGITAL</h2>
        <p className='text-first'>
          Compartimos la pasión por nuestro trabajo y la ilusión por cambiar el
          mundo emprendedor.
        </p>
        <p className='text-first'>
          Potenciamos la identidad digital de tu marca acompañándote en el
          proceso, escuchándote y aconsejándote para que tu experiencia y la de
          tu público sea única.
        </p>
        <img src={contacto} alt='Logo Contacto' className='logo-contacto' />
      </section>
      <section
        style={{ height: '90vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-2 ${
          currentSection === 1 ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        <h1 className='title-first-nuestros-servicios'>NUESTROS SERVICIOS</h1>
        <p className='text-second'>
          Contamos con una amplia gama de servicios diseñados a la medida de
          cada emprendimiento que quie ra tener éxito en el mundo digital.
        </p>
        <div className='ctn-servicios'>
          <div className='servicios'>
            <img className='icono-servicios' src={icono3} alt='icono pay' />
            <p className='text-icono-servicios'>CONSULTORIA ESTRATEGICA</p>
            <p className='text-transition'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              quod numquam. Velit fuga reiciendis, illum esse quis repudiandae.
              Ut, nihil.
            </p>
          </div>
          <div className='servicios'>
            <img className='icono-servicios' src={icono} alt='icono ojo' />
            <p className='text-icono-servicios'>GESTIÓN DE REDES SOCIALES</p>
            <p className='text-transition'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              quod numquam. Velit fuga reiciendis, illum esse quis repudiandae.
              Ut, nihil.
            </p>
          </div>
          <div className='servicios'>
            <img className='icono-servicios' src={icono2} alt='icono llave' />
            <p className='text-icono-servicios'>PUBLICIDAD DIGITAL</p>
            <p className='text-transition'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              quod numquam. Velit fuga reiciendis, illum esse quis repudiandae.
              Ut, nihil.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ height: '90vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-3 ${
          currentSection === 2 ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        <h1 className='title-first-portafolio'>PORTAFOLIO</h1>
        <p className='text-second'>
          Ya son varias las personas que decidieron confiar en nuestros
          servicios y sumarse a la transformación digital.
        </p>
        <div className='ctn-portafolio'>
          <div className='portfolio'>
            <img className='icono-portafolio' src={icono4} alt='icono pay' />
            <p className='text-icono-portafolio'>DON OFICIOS</p>
            <a className='button-portafolio' href=' '>
              Ver mas
            </a>
          </div>
          <div className='portfolio'>
            <img className='icono-portafolio' src={icono4} alt='icono ojo' />
            <p className='text-icono-portafolio'>STILL JOBS</p>
            <a className='button-portafolio' href=' '>
              Ver mas
            </a>
          </div>
          <div className='portfolio'>
            <img className='icono-portafolio' src={icono4} alt='icono llave' />
            <p className='text-icono-portafolio'>COMUNIDAD DE MARCAS</p>
            <a className='button-portafolio' href=' '>
              Ver mas
            </a>
          </div>
        </div>
      </section>
      <section
        style={{ height: '90vh', transition: 'transform 0.5s ease-in-out' }}
        className={`section-4 ${
          currentSection === 3 ? 'animate__animated animate__fadeIn' : ''
        }`}
      >
        <h1 className='title-first'>NOVEDADES</h1>
      </section>
    </div>
  );
};

export default Home;
