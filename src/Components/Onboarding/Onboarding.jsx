//CSS
import './Onboarding.css';

import logoCalu from '../../images/logocalu.png';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <>
      <div className='onboarding'>
        <div className='parrafo'>
          <h4>Tu agencia de marketing digital</h4>
          <p>Mejora la visibilidad de tu marca </p>
          <p>
            Te aydamos a hacer crecer tu genocio, llevarlo al siguiente nivel y sumarte al
            ecosistema digital.
          </p>
          <p>No dejes pasar la oportunidad, subite a la transformación digital.</p>
          <h3>¡Qué tu negocio despegue!</h3>
        </div>
        <img src={logoCalu} alt='logo calu' className='logoCalu' />
      </div>
      <div className='contactFlex'>
        <div className='contact-btn'>
          <Link to={'/contact'}>Contactanos</Link>
        </div>
      </div>
    </>
  );
};
export default Onboarding;
