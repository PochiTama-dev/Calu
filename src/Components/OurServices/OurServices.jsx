import icono2 from '../Services/icons/publicidad_digital.png';
import icono from '../Services/icons/gestion_redes.png';
import icono3 from '../Services/icons/consultoria_estrategica.png';
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
                btn={
                  <a className=' button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
              <p className='paragraph'>
                ¿Sentís que tu marca no despega? En CALU analizamos la situación actual y diseñamos
                una estrategia de comunicación para definir la identidad digital de tu marca y
                mejorar tus resultados.
              </p>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono} alt='icono ojo' />}
                title={<p className='text-icono-servicios'>GESTIÓN DE REDES SOCIALES</p>}
                btn={
                  <a className=' button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
              <p className='paragraph'>
                Te ayudamos a identificar tu público ideal, definimos una estrategia y armamos un
                plan de contenidos para mejorar la presencia digital de tu marca, darle más alcance
                y aumentar tus ventas.
              </p>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono2} alt='icono llave' />}
                title={<p className='text-icono-servicios'>PUBLICIDAD DIGITAL</p>}
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
              <p className='paragraph'>
                Creamos tus campañas de publicidad, en Google ADS, Meta ADS, LinkedIn Ads y TikTok
                Ads con anuncios altamente personalizados y segmentados, para dirigirlos a un
                público que realmente se interese en tus productos o servicios.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
