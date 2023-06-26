import icono2 from '../Services/icons/publicidad_digital.png';
import icono from '../Services/icons/gestion_redes.png';
import icono3 from '../Services/icons/consultoria_estrategica.png';
import email_marketing from '../Services/icons/email_marketing.png';
import book_institucional from '../Services/icons/book_institucional.png';
import creación_contenido from '../Services/icons/creación_contenido.png';
import modelo_negocio from '../Services/icons/modelo_negocio.png';
import desarrollo_web from '../Services/icons/desarrollo_web.png';
import Slider from '../Portfolio/Slider/Slider';
import Card from '../Portfolio/Card/Card';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className='ourServices'>
      <h1 className='title-first-nuestros-servicios'>NUESTROS SERVICIOS</h1>
      <p className='text-second'>
        Contamos con una amplia gama de servicios diseñados a la medida de cada emprendimiento que
        quiera tener éxito en el mundo digital.
      </p>
      <div className='ctn-servicios'>
        <div className='slider'>
          <Slider>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono3} alt='icono pay' />}
                title={<p className='text-icono-servicios'>CONSULTORIA ESTRATEGICA</p>}
                text={<p className='paragraph'>¿Sentís que tu marca no despega?</p>}
                btn={
                  <a className=' button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono} alt='icono ojo' />}
                title={<p className='text-icono-servicios'>GESTIÓN DE REDES SOCIALES</p>}
                text={<p className='paragraph'>Te ayudamos a identificar tu público ideal</p>}
                btn={
                  <a className=' button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={icono2} alt='icono llave' />}
                title={<p className='text-icono-servicios'>PUBLICIDAD DIGITAL</p>}
                text={<p className='paragraph'>Creamos tus campañas de publicidad</p>}
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={<img className='icono-servicios' src={email_marketing} alt='icono email' />}
                title={<p className='text-icono-servicios'>MARKETING</p>}
                text={
                  <p className='paragraph'>
                    Te ayudamos a armar el flujo de emails adecuado para que tus leads se conviertan
                    en ventas seguras
                  </p>
                }
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={
                  <img className='icono-servicios' src={book_institucional} alt='icono book' />
                }
                title={<p className='text-icono-servicios'>BOOK INSTITUCIONAL</p>}
                text={
                  <p className='paragraph'>
                    Que la calidad de imagen de tus productos, o servicios, sean tu principal factor
                    de conversión
                  </p>
                }
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={
                  <img className='icono-servicios' src={creación_contenido} alt='icono creacion' />
                }
                title={<p className='text-icono-servicios'>CREACION DE CONTENIDO</p>}
                text={
                  <p className='paragraph'>
                    Realizamos una investigación de mercado, nos involucramos con tus objetivos
                  </p>
                }
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={
                  <img
                    className='icono-servicios'
                    src={modelo_negocio}
                    alt='icono modelo_negocio'
                  />
                }
                title={<p className='text-icono-servicios'>MODELO DE NEGOCIO</p>}
                text={<p className='paragraph'> Analicemos en equipo tu idea</p>}
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
            <div className='nuestros-servicios'>
              <Card
                image={
                  <img
                    className='icono-servicios'
                    src={desarrollo_web}
                    alt='icono desarrollo web'
                  />
                }
                title={<p className='text-icono-servicios'>DESARROLLO WEB</p>}
                text={
                  <p className='paragraph'>
                    Partiendo de tus objetivos de negocio, definimos una estrategia clara de
                    desarrollo
                  </p>
                }
                btn={
                  <a className='button_portfolio' href='/services'>
                    Ver más
                  </a>
                }
              ></Card>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
