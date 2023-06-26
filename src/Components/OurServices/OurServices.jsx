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
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default OurServices;
