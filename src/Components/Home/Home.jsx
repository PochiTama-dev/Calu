import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import 'animate.css/animate.min.css';
import './home.css';
import { Header } from '../Header/header';
import icono from '../Home/icon_eye.svg';
import icono2 from '../Home/🦆 icon _key_.svg';
import icono3 from '../Home/🦆 icon _pie chart_.svg';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import News from '../News/News';
import Slider from '../Portfolio/Slider/Slider';
import Card from '../Portfolio/Card/Card';
import Onboarding from '../Onboarding/Onboarding';

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
        <h1 className='title-first-nuestros-servicios'>NUESTROS SERVICIOS</h1>
        <p className='text-second'>
          Contamos con una amplia gama de servicios diseñados a la medida de cada emprendimiento que
          quie ra tener éxito en el mundo digital.
        </p>
        <div className='ctn-servicios'>
          <div className='slider'>
            <Slider>
              <div className='nuestros-servicios'>
                <Card
                  image={<img className='icono-servicios' src={icono3} alt='icono pay' />}
                  title={<p className='text-icono-servicios'>CONSULTORIA ESTRATEGICA</p>}
                ></Card>
                <p className='text-transition'>
                  Identificamos oportunidades de mejora y te ayudamos a hacer crecer tu negocio
                  ¿Sentís que tu marca no despega? En CALU analizamos la situación actual y
                  diseñamos una estrategia de comunicación para definir la identidad digital de tu
                  marca y mejorar tus resultados. Nuestro modelo de trabajo se basa en la cercanía
                  con las personas para sumar valor y lograr que sus negocios despeguen. ¡Empecemos
                  a trabajar en equipo!
                </p>
              </div>
              <div className='nuestros-servicios'>
                <Card
                  image={<img className='icono-servicios' src={icono} alt='icono ojo' />}
                  title={<p className='text-icono-servicios'>GESTIÓN DE REDES SOCIALES</p>}
                ></Card>
                <p className='text-transition'>
                  Potenciamos tus Redes Sociales y generamos una comunidad que se identifique con tu
                  marca Te ayudamos a identificar tu público ideal, definimos una estrategia y
                  armamos un plan de contenidos para mejorar la presencia digital de tu marca, darle
                  más alcance y aumentar tus ventas. ¡Dale vida a tus redes y destacate de la
                  competencia!
                </p>
              </div>
              <div className='nuestros-servicios'>
                <Card
                  image={<img className='icono-servicios' src={icono2} alt='icono llave' />}
                  title={<p className='text-icono-servicios'>PUBLICIDAD DIGITAL</p>}
                ></Card>
                <p className='text-transition'>
                  Escalamos tu negocio y maximizamos la visibilidad de tu marca con publicidades
                  efectivas Creamos tus campañas de publicidad, en Google ADS, Meta ADS, LinkedIn
                  Ads y TikTok Ads con anuncios altamente personalizados y segmentados, para
                  dirigirlos a un público que realmente se interese en tus productos o servicios.
                  Medimos las métricas de las campañas y realizamos los ajustes necesarios para
                  obtener mejores resultados. ¡Incrementá tu presencia online, dejá tu huella y que
                  más personas te conozcan!
                </p>
              </div>
            </Slider>
          </div>
        </div>
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
