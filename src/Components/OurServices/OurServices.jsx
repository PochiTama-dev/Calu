import icono from '../Home/icon_eye.svg';
import icono2 from '../Home/🦆 icon _key_.svg';
import icono3 from '../Home/🦆 icon _pie chart_.svg';
import Slider from '../Portfolio/Slider/Slider';
import Card from '../Portfolio/Card/Card';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className='ourServices'>
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
                ¿Sentís que tu marca no despega? En CALU analizamos la situación actual y diseñamos
                una estrategia de comunicación para definir la identidad digital de tu marca y
                mejorar tus resultados. Nuestro modelo de trabajo se basa en la cercanía con las
                personas para sumar valor y lograr que sus negocios despeguen. ¡Empecemos a trabajar
                en equipo!
              </p>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono} alt='icono ojo' />}
                title={<p className='text-icono-servicios'>GESTIÓN DE REDES SOCIALES</p>}
              ></Card>
              <p className='text-transition'>
                Potenciamos tus Redes Sociales y generamos una comunidad que se identifique con tu
                marca Te ayudamos a identificar tu público ideal, definimos una estrategia y armamos
                un plan de contenidos para mejorar la presencia digital de tu marca, darle más
                alcance y aumentar tus ventas. ¡Dale vida a tus redes y destacate de la competencia!
              </p>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono2} alt='icono llave' />}
                title={<p className='text-icono-servicios'>PUBLICIDAD DIGITAL</p>}
              ></Card>
              <p className='text-transition'>
                Escalamos tu negocio y maximizamos la visibilidad de tu marca con publicidades
                efectivas Creamos tus campañas de publicidad, en Google ADS, Meta ADS, LinkedIn Ads
                y TikTok Ads con anuncios altamente personalizados y segmentados, para dirigirlos a
                un público que realmente se interese en tus productos o servicios. Medimos las
                métricas de las campañas y realizamos los ajustes necesarios para obtener mejores
                resultados. ¡Incrementá tu presencia online, dejá tu huella y que más personas te
                conozcan!
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
